package com.devbrain.dentahouse.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SittingNotFoundByIdException extends RuntimeException {
    private final String message;
}
