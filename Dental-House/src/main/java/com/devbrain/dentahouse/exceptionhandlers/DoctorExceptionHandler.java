package com.devbrain.dentahouse.exceptionhandlers;

import com.devbrain.dentahouse.exceptions.ScheduleNotFoundByIdException;
import com.devbrain.dentahouse.exceptions.UserNotLoggedInException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@AllArgsConstructor
public class DoctorExceptionHandler {

    private ErrorResponseBuilder errorResponseBuilder;

    @ExceptionHandler(UserNotLoggedInException.class)
    public ResponseEntity<ErrorResponse<String>> handleUserNotLoggedIn(UserNotLoggedInException ex){
        return errorResponseBuilder.withStringRootCause(HttpStatus.UNAUTHORIZED, ex.getMessage(), "User not logged in yet");
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ErrorResponse<String>> handleBadCredentials(BadCredentialsException ex){
        return errorResponseBuilder.withStringRootCause(HttpStatus.BAD_REQUEST, ex.getMessage(), "Invalid Credentials");
    }

}
