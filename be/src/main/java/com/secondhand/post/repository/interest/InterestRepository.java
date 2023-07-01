package com.secondhand.post.repository.interest;

import com.secondhand.post.entity.Interest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterestRepository extends JpaRepository<Interest, Long>, InterestRepositoryCustom {

}
