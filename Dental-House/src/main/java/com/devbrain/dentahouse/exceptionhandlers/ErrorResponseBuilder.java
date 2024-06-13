package com.devbrain.dentahouse.exceptionhandlers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class ErrorResponseBuilder {

    public ResponseEntity<ErrorResponse<String>> withStringRootCause(HttpStatus httpStatus, String message, String rootCause){
        return ResponseEntity.status(httpStatus)
                .body(new ErrorResponse<String>()
                        .setStatus(httpStatus.value())
                        .setMessage(message)
                        .setRootCause(rootCause));
    }
}
