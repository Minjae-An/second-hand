package com.secondhand.config;


import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi publicApi() {

        return GroupedOpenApi.builder()
                .group("team06")
                .pathsToMatch("/**")
                .build();
    }

    @Bean
    public OpenAPI springShopOpenAPI() {

        return new OpenAPI()
                .info(new Info().title("Second Hand API")
                        .description("Second Hand API 명세서입니다." +
                                " \n 시간은 yyyy-MM-dd kk:mm:ss 형식으로 표시됩니다." +
                                " \n swagger 오류 때문에 시간이 2023-06-07T07:00:52.146Z 형식으로 표시됩니다.")
                        .version("v0.0.1"));
    }
}
