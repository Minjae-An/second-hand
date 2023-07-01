package com.secondhand.category.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;

@Getter
public class CategoryDto {

    private int id;
    private String name;
    private String photoUrl;

    @QueryProjection
    public CategoryDto(int id, String name, String photoUrl) {
        this.id = id;
        this.name = name;
        this.photoUrl = photoUrl;
    }
}
