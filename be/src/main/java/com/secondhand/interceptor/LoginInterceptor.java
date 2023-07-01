package com.secondhand.interceptor;

import com.secondhand.exception.login.NoAuthorizationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Component
@RequiredArgsConstructor
public class LoginInterceptor implements HandlerInterceptor {

    private final DefaultInterceptor defaultInterceptor;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        if (request.getHeader("Authorization") == null) {
            throw new NoAuthorizationException();
        }

        defaultInterceptor.preHandle(request, response, handler);

        return true;
    }
}
