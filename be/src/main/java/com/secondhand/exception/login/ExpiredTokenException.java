package com.secondhand.exception.login;

public class ExpiredTokenException extends JwtTokenException{

    public ExpiredTokenException() {

        super("Token is expired");
    }
}
