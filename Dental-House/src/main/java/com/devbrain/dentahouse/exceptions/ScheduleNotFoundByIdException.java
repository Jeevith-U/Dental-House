package com.devbrain.dentahouse.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ScheduleNotFoundByIdException extends RuntimeException {
    private final String message;
}
