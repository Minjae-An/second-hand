package com.secondhand.post.repository.category;

import com.secondhand.post.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer>, CategoryRepositoryCustom {
}
