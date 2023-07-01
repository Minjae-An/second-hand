package com.secondhand.interceptor;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@RequiredArgsConstructor
public class CreatePostInterceptor implements HandlerInterceptor {

    private final LoginInterceptor loginInterceptor;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        if (request.getMethod().equals("POST")) {
            loginInterceptor.preHandle(request, response, handler);
        }
        return true;
    }
}
