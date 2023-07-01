package com.secondhand.interceptor;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Component
@RequiredArgsConstructor
public class NotLoggedInUserInterceptor implements HandlerInterceptor {

    private final DefaultInterceptor defaultInterceptor;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        log.info("findMaeinPageInterceptor request.getMethod() = {}", request.getMethod());

        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        String authorizationHeader = request.getHeader("Authorization");

        if (request.getMethod().equals("GET")) {
            if (authorizationHeader == null) {
                return true;
            }

            defaultInterceptor.preHandle(request, response, handler);
        }

        return true;
    }
}
