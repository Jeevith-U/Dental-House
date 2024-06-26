package com.devbrain.dentahouse.exceptionhandlers;

import com.devbrain.dentahouse.exceptions.ScheduleNotFoundByIdException;
import com.devbrain.dentahouse.exceptions.SittingNotFoundByIdException;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@AllArgsConstructor
public class SittingExceptionHandler {

    private final ErrorResponseBuilder errorResponseBuilder;

    @ExceptionHandler(SittingNotFoundByIdException.class)
    public ResponseEntity<ErrorResponse<String>> handleScheduleNotFoundByIdException(SittingNotFoundByIdException ex){
        return errorResponseBuilder.withStringRootCause(HttpStatus.NOT_FOUND, ex.getMessage(), "Unable to find Sitting With Specified Id...");
    }
}
