package com.secondhand.util;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CustomErrorResponse {

    private int code;
    private String message;
}
