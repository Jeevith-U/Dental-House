package com.devbrain.dentahouse.exceptionhandlers;

import com.devbrain.dentahouse.exceptions.PatientNotFoundByIdException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@AllArgsConstructor
public class PatientExceptionHandler {

    private final ErrorResponseBuilder errorResponseBuilder;

    @ExceptionHandler(PatientNotFoundByIdException.class)
    public ResponseEntity<ErrorResponse<String>> handlePatientNotFoundById(PatientNotFoundByIdException ex){
        return errorResponseBuilder.withStringRootCause(HttpStatus.NOT_FOUND, ex.getMessage(), "Patient not present with the given patientId");
    }
}
