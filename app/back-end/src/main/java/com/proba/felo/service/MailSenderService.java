package com.proba.felo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class MailSenderService {

    private final String FIXED_RECEIVER_EMAIL = "test@emailservice.com";
    @Autowired
    private JavaMailSender emailSender;

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
}
