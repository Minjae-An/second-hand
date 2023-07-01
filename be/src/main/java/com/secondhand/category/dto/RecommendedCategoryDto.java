package com.secondhand.category.dto;

import com.querydsl.core.annotations.QueryProjection;

public class RecommendedCategoryDto {

    private int id;
    private String name;

    @QueryProjection
    public RecommendedCategoryDto(CategoryDto categoryDto) {
        this.id = categoryDto.getId();
        this.name = categoryDto.getName();
    }
}
