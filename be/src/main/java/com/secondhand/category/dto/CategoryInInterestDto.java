package com.secondhand.category.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Getter;

@Getter
public class CategoryInInterestDto {

    private int id;
    private String name;

    @QueryProjection
    public CategoryInInterestDto(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
