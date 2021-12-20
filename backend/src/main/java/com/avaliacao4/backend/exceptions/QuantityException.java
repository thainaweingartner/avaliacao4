package com.avaliacao4.backend.exceptions;

public class QuantityException extends RuntimeException {

    public QuantityException(String message) {
        super(message);
    }

    public QuantityException(String message, Throwable throwable) {
        super(message, throwable);
    }
}
