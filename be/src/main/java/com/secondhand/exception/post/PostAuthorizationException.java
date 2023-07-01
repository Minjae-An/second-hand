package com.secondhand.exception.post;

public class PostAuthorizationException extends RuntimeException {

    public PostAuthorizationException() {

        super("상품 권한 예외");
    }

    public PostAuthorizationException(String message) {
        
        super(message);
    }
}
