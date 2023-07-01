package com.secondhand.category;

import com.secondhand.category.dto.CategoriesDto;
import com.secondhand.category.dto.CategoryDto;
import com.secondhand.post.repository.category.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public CategoriesDto getCategoryList() {

        return categoryRepository.findAllCategories();
    }

    // TODO: 추천 검색으로 변경하기
    @Transactional(readOnly = true)
    public CategoriesDto getRecommendedCategories(String postTitle) {

        return recommendCategories(categoryRepository.findAllCategories().getCategories());
    }

    private CategoriesDto recommendCategories(List<CategoryDto> categories) {

        List<CategoryDto> recommendedCategories = new ArrayList<>();

        Random random = new Random();
        Set<Integer> numbers = new HashSet<>();

        while (numbers.size() < 3) {
            int randomNumber = random.nextInt(categories.size() + 1);
            numbers.add(randomNumber);
        }

        for (Integer number : numbers) {
            recommendedCategories.add(categories.get(number));
        }

        return new CategoriesDto(recommendedCategories);
    }
}
