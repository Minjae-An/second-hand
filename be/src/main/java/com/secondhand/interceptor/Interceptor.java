package com.secondhand.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Interceptor extends HandlerInterceptor {

    boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler);
}
