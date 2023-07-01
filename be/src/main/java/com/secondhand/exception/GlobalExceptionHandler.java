package com.secondhand.exception;

import com.secondhand.exception.login.JwtTokenException;
import com.secondhand.exception.post.PostAuthorizationException;
import com.secondhand.util.CustomErrorResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;
import software.amazon.awssdk.http.HttpStatusCode;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(JwtTokenException.class)
    public ResponseEntity<CustomErrorResponse> loginExceptionHandler(JwtTokenException e) {

        return ResponseEntity
                .badRequest()
                .body(new CustomErrorResponse(HttpStatusCode.UNAUTHORIZED, e.getMessage()));
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<CustomErrorResponse> handleNotFoundError(NoHandlerFoundException e) {

        return ResponseEntity
                .status(HttpStatusCode.NOT_FOUND)
                .body(new CustomErrorResponse(HttpStatusCode.NOT_FOUND, e.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomErrorResponse> handleValidationExceptions(MethodArgumentNotValidException e) {

        return ResponseEntity
                .badRequest()
                .body(new CustomErrorResponse(HttpStatusCode.BAD_REQUEST, e.getMessage()));
    }

    @ExceptionHandler(PostAuthorizationException.class)
    public ResponseEntity<CustomErrorResponse> handlePostAuthorizationException(PostAuthorizationException e) {
        return ResponseEntity
                .status(HttpStatusCode.FORBIDDEN)
                .body(new CustomErrorResponse(HttpStatusCode.FORBIDDEN, e.getMessage()));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<CustomErrorResponse> handleIllegalArgumentException(IllegalArgumentException e) {
        return ResponseEntity
                .badRequest()
                .body(new CustomErrorResponse(HttpStatusCode.NOT_FOUND, e.getMessage()));
    }
}
