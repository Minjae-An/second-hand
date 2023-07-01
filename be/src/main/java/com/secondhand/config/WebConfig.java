package com.secondhand.config;

import com.secondhand.interceptor.CreatePostInterceptor;
import com.secondhand.interceptor.NotLoggedInUserInterceptor;
import com.secondhand.interceptor.LoginInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// TODO : CORS 학습 후 addMapping, allowedOrigin, allowedMethods 설정
@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final LoginInterceptor loginInterceptor;
    private final CreatePostInterceptor createPostInterceptor;
    private final NotLoggedInUserInterceptor notLoggedInUserInterceptor;

    // TODO : 배포시 allowedOrigins "http://3.37.72.34" 로 변경
    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH");
    }

    // TODO: 댓글 interceptor 추가
    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(loginInterceptor)
                .addPathPatterns("/posts/**")
                .addPathPatterns("/regions/**")
                .addPathPatterns("/users/**")
                .addPathPatterns("/categories/**")
                .addPathPatterns("/upload")
                .addPathPatterns("/chatting/**")
                .excludePathPatterns("/posts")
                .excludePathPatterns("/users/regions");

        registry.addInterceptor(createPostInterceptor)
                .addPathPatterns("/posts");

        registry.addInterceptor(notLoggedInUserInterceptor)
                .addPathPatterns("/posts")
                .addPathPatterns("/users/regions");
    }
}
