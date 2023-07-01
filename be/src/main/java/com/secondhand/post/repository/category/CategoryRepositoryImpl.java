package com.secondhand.post.repository.category;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.category.dto.CategoriesDto;
import com.secondhand.category.dto.QCategoryDto;

import static com.secondhand.post.entity.QCategory.category;

public class CategoryRepositoryImpl implements CategoryRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public CategoryRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    @Override
    public CategoriesDto findAllCategories() {

        return new CategoriesDto(queryFactory
                .select(new QCategoryDto(
                        category.id,
                        category.name,
                        category.photoUrl))
                .from(category)
                .fetch());
    }

}
