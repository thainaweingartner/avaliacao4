package com.avaliacao4.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class QuantityExceptionHandler {

    @ExceptionHandler(QuantityException.class)
    public ResponseEntity<QuantityCustomException> error(QuantityException exception, HttpServletRequest request) {
        QuantityCustomException exceptionCustom = new QuantityCustomException(HttpStatus.NOT_ACCEPTABLE.value(), exception.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(exceptionCustom);
    }
}
