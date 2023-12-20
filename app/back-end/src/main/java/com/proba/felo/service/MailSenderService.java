package com.proba.felo.service;

import com.proba.felo.model.entity.Article;
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
import java.util.Set;

@Slf4j
@Service
public class MailSenderService {

    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private Environment env;
    @Autowired
    private UserService userService;

    private final String FIXED_RECEIVER_EMAIL = "test@emailservice.com";
    private final String WEEKLY_NEWS_EMAIL_SUBJECT = "Aktuális adora hírek";


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
    @Scheduled(
            fixedRate = 100000,
            initialDelay = 3000
    )
    @Async
    public void sendArticleEmailsToUsers(){
        try{
            InternetAddress senderEmail = new InternetAddress(Objects.requireNonNull(env.getProperty("spring.mail.from.email")));
            List<User> users = userService.getUsers();
            for (User user : users) {
                try {
                    MimeMessage message = emailSender.createMimeMessage();
                    message.setSender(senderEmail);
                    message.setFrom(senderEmail);
                    message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(user.getEmail()));
                    message.setSubject(WEEKLY_NEWS_EMAIL_SUBJECT);

                    MimeBodyPart imagePart = new MimeBodyPart();
                    StringBuilder sb = new StringBuilder();
                    sb.append("<html> <h2>Az eheti cikkeink, melyek érdekelhetnek:</h2>");
                    for(Article article : userService.getRelevantArticles(user)){
                        sb.append("<a href=\"\"><h4>"+ article.getTitle() + "</h4>") //TODO a href link
                                .append("<img src=\"cid:")
                                .append(article.getImage().getFname())
                                .append("\" width=\"30%\" height=\"30%\" /></a><br>");

                        imagePart.setHeader("Content-ID", article.getImage().getFname());
                        imagePart.setDisposition(MimeBodyPart.INLINE);
                        URL imageResource = this.getClass().getClassLoader().getResource("img/" + article.getImage().getFname());
                        if(imageResource == null){
                            throw new IllegalArgumentException("file not found! " + article.getImage().getFname());
                        } else {
                            imagePart.attachFile(imageResource.getFile());
                        }
                    }
                    sb.append("</html>");

                    MimeBodyPart textBodyPart = new MimeBodyPart();
                    textBodyPart.setContent(sb.toString(), "text/html; charset=utf-8");

                    Multipart multipart = new MimeMultipart();
                    multipart.addBodyPart(textBodyPart);
                    multipart.addBodyPart(imagePart);

                    message.setContent(multipart);
                    emailSender.send(message);
                }catch(MessagingException me){
                    log.error("");
                }
                catch(IOException ioe){
                    log.error(ioe.getMessage());
                }
            }
        }catch(AddressException ae){

        }
    }

    private String composeArticleEmailContent(Set<Article> articles){
        /*try{

        }
        catch (MessagingException me) {

        }
        catch (IOException ioe){

        }*/

        return "";
    }
}