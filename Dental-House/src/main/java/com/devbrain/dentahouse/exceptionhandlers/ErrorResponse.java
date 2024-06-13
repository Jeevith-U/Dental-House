package com.devbrain.dentahouse.exceptionhandlers;

import lombok.Getter;

@Getter
public class ErrorResponse<T> {
    private int status;
    private String message;
    private T rootCause;

    public ErrorResponse<T> setStatus(int status) {
        this.status = status;
        return this;
    }

    public ErrorResponse<T> setMessage(String message) {
        this.message = message;
        return this;
    }

    public ErrorResponse<T> setRootCause(T rootCause) {
        this.rootCause = rootCause;
        return this;
    }
}
