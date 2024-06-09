package com.devbrain.dentahouse.util;

public class SimpleResponseStructure {
    private int status;
    private String message;

    public int getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public SimpleResponseStructure setStatus(int status) {
        this.status = status;
        return this;
    }

    public SimpleResponseStructure setMessage(String message) {
        this.message = message;
        return this;
    }
}
