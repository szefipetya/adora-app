package com.proba.felo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DeadlineNotFoundException extends RuntimeException{
    public DeadlineNotFoundException(String message) {
        super(message);
    }
}
