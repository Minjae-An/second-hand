package com.secondhand.exception.login;

public class JwtTokenException extends RuntimeException {

    public JwtTokenException() {

        super("Jwt Token Exception");
    }

    public JwtTokenException(String message) {

        super(message);
    }
}
