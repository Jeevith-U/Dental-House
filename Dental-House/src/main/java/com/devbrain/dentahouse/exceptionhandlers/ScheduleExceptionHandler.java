package com.devbrain.dentahouse.exceptionhandlers;

import com.devbrain.dentahouse.exceptions.ScheduleNotFoundByIdException;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@AllArgsConstructor
public class ScheduleExceptionHandler {

    private final ErrorResponseBuilder errorResponseBuilder;

    @ExceptionHandler(ScheduleNotFoundByIdException.class)
    public ResponseEntity<ErrorResponse<String>> handleScheduleNotFoundByIdException(ScheduleNotFoundByIdException ex){
        return errorResponseBuilder.withStringRootCause(HttpStatus.NOT_FOUND, ex.getMessage(), "Schedule not present with the given schedule Id");
    }
}
