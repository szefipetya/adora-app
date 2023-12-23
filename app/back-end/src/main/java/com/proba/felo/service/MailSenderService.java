package com.proba.felo.service;

import com.proba.felo.model.entity.Article;
import com.proba.felo.model.entity.Deadline;
import com.proba.felo.model.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.internet.*;
import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Objects;

@Slf4j
@Service
public class MailSenderService {

    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private Environment env;
    @Autowired
    private UserService userService;
    @Autowired
    private DeadlineService deadlineService;

    private final String FIXED_RECEIVER_EMAIL = "test@emailservice.com";
    private final String WEEKLY_NEWS_EMAIL_SUBJECT = "Aktuális adora hírek";
    private final String DEADLINE_EMAIL_SUBJECT = "ADÓRA figyelmeztetés; közelgő határidők!";


    public void sendTestMessage(String to) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("teszt mail");
        message.setText("teszt szöveg...");
        emailSender.send(message);
    }

    /*  @Scheduled(
              initialDelayString="${fixedInitialDelay.in.milliseconds}",
              fixedRateString="${fixedRate.in.milliseconds}"
      ) //crom expr is használható; cron = "0 15 10 15 * ?"*/
    @Async
    public void sendTestMessageScheduled() {
        sendTestMessage(this.FIXED_RECEIVER_EMAIL);
    }


    /*@Scheduled(
            initialDelay=1000,
            fixedRate=100000
    )*/
    @Scheduled(cron = "0 0 0 ? * FRI") // every Friday
    @Async
    public void sendArticleEmailsToUsers() {
        try {
            InternetAddress senderEmail = new InternetAddress(Objects.requireNonNull(env.getProperty("spring.mail.from.email")));
            List<User> users = userService.getUsers();
            for (User user : users) {
                try {
                    MimeMessage message = emailSender.createMimeMessage();
                    message.setSender(senderEmail);
                    message.setFrom(senderEmail);
                    message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(user.getEmail()));
                    message.setSubject(WEEKLY_NEWS_EMAIL_SUBJECT);

                    Multipart multipart = new MimeMultipart();
                    StringBuilder sb = new StringBuilder();
                    sb.append("<html> <h2>Az eheti cikkeink, melyek érdekelhetnek:</h2>");
                    for (Article article : userService.getRelevantArticlesWithinAWeek(user)) {
                        MimeBodyPart imagePart = new MimeBodyPart();
                        sb.append("<a href=\"\"><h4>").append(article.getTitle()).append("</h4>") //TODO a href link
                                .append("<img src=\"cid:")
                                .append(article.getImage().getFname())
                                .append("\" width=\"30%\" height=\"30%\" /></a><br>");

                        imagePart.setHeader("Content-ID", article.getImage().getFname());
                        imagePart.setDisposition(MimeBodyPart.INLINE);
                        URL imageResource = this.getClass().getClassLoader().getResource("img/" + article.getImage().getFname());
                        if (imageResource == null) {
                            throw new IllegalArgumentException("file not found! " + article.getImage().getFname());
                        } else {
                            imagePart.attachFile(imageResource.getFile());
                        }
                        multipart.addBodyPart(imagePart);
                    }
                    sb.append("</html>");

                    MimeBodyPart textBodyPart = new MimeBodyPart();
                    textBodyPart.setContent(sb.toString(), "text/html; charset=utf-8");
                    multipart.addBodyPart(textBodyPart);

                    message.setContent(multipart);
                    emailSender.send(message);
                } catch (MessagingException | IOException e) {
                    log.error(e.getMessage());
                }
            }
        } catch (AddressException ae) {
            log.error(ae.getMessage());
        }
    }

    @Scheduled(cron = "0 0 */2 * * *") //every 2 days
    @Async
    public void sendDeadlineEmailsToUsers() {
        try {
            InternetAddress senderEmail = new InternetAddress(Objects.requireNonNull(env.getProperty("spring.mail.from.email")));
            try {
                MimeMessage message = emailSender.createMimeMessage();
                message.setSender(senderEmail);
                message.setFrom(senderEmail);
                message.setSubject(DEADLINE_EMAIL_SUBJECT);

                StringBuilder sb = new StringBuilder();
                sb.append("<html> <h2>Emlékeztető</h2><h3>Egy héten belüli határidők:</h3><br>");
                for (Deadline deadline : deadlineService.getDeadlinesWithXDays(7)) {
                    sb.append("<h5>").append(deadline.getInformation()).append(":</h5>")
                            .append("<h4>").append(deadline.getDate()).append(":</h4><br><br>");
                }
                sb.append("</html>");

                MimeBodyPart textBodyPart = new MimeBodyPart();
                textBodyPart.setContent(sb.toString(), "text/html; charset=utf-8");
                Multipart multipart = new MimeMultipart();
                multipart.addBodyPart(textBodyPart);
                message.setContent(multipart);

                List<User> users = userService.getUsers();
                for (User user : users) {
                    message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(user.getEmail()));
                    emailSender.send(message);
                }
            } catch (MessagingException e) {
                log.error(e.getMessage());
            }
        } catch (AddressException ae) {
            log.error(ae.getMessage());
        }
    }
}