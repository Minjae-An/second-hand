package com.secondhand.exception.login;

public class NoBearerException extends JwtTokenException {

    public NoBearerException() {

        super("No Bearer Token Exception");
    }
}
