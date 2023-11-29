package com.proba.felo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.annotation.Async;

@Service
public class MailSenderService {

    @Autowired
    private JavaMailSender emailSender;

    private final String FIXED_RECEIVER_EMAIL = "test@emailservice.com";

    public void sendTestMessage(String to) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("teszt mail");
        message.setText("teszt szöveg...");
        emailSender.send(message);
    }

    @Scheduled(
            initialDelayString="${fixedInitialDelay.in.milliseconds}",
            fixedRateString="${fixedRate.in.milliseconds}"
    ) //crom expr is használható; cron = "0 15 10 15 * ?"
    @Async
    public void sendTestMessageScheduled() {
        sendTestMessage(this.FIXED_RECEIVER_EMAIL);
    }
}
