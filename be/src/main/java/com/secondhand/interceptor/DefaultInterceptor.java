package com.secondhand.interceptor;

import com.secondhand.exception.login.ExpiredTokenException;
import com.secondhand.exception.login.ManipulatedTokenException;
import com.secondhand.exception.login.NoBearerException;
import com.secondhand.user.login.JwtUtil;
import com.secondhand.user.login.dto.LoggedInUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Slf4j
@Component
@RequiredArgsConstructor
public class DefaultInterceptor implements Interceptor {

    private final JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {

        log.info("defaultInterceptor request.getMethod");

        String token = request.getHeader("Authorization").split(" ")[1];
        if (!request.getHeader("Authorization").split(" ")[0].equals("Bearer")) {
            throw new NoBearerException();
        }

        if (!jwtUtil.validateTokenIsManipulated(token)) {
            throw new ManipulatedTokenException();
        }

        if (!jwtUtil.validateTokenIsExpired(token)) {
            throw new ExpiredTokenException();
        }

        LoggedInUser loggedInUser = jwtUtil.extractedUserFromToken(token);
        request.setAttribute("loggedInUser", loggedInUser);

        return true;
    }
}
