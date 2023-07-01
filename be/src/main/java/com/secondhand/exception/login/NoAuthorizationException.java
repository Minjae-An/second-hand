package com.secondhand.exception.login;

public class NoAuthorizationException extends JwtTokenException {

    public NoAuthorizationException() {

        super("No Authorization Header");
    }
}
