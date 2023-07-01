package com.secondhand.exception.login;

public class ManipulatedTokenException extends JwtTokenException {

    public ManipulatedTokenException() {

        super("Token Manipulated Exception");
    }
}
