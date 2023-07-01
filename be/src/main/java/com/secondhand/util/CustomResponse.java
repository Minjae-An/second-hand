package com.secondhand.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CustomResponse<Data> {
    private String status;
    private int code;
    private String message;
    private Data data;

    public CustomResponse(String status, int code, String message) {
        this.status = status;
        this.code = code;
        this.message = message;
    }
}
