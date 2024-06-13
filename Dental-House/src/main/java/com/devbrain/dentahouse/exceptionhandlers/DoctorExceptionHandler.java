package com.devbrain.dentahouse.exceptionhandlers;

import com.devbrain.dentahouse.exceptions.UserNotLoggedInException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DoctorExceptionHandler {

    private ErrorResponseBuilder errorResponseBuilder;

    @ExceptionHandler(UserNotLoggedInException.class)
    public ResponseEntity<ErrorResponse<String>> handleUserNotLoggedIn(UserNotLoggedInException ex){
        return errorResponseBuilder.withStringRootCause(HttpStatus.UNAUTHORIZED, ex.getMessage(), "User not logged in yet");
    }
}
