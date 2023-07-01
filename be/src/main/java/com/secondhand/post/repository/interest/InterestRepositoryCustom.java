package com.secondhand.post.repository.interest;

import com.secondhand.category.dto.CategoryInInterestDto;
import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.entity.Interest;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface InterestRepositoryCustom {
    Page<PostMetaDto> findMyInterestsPosts(Pageable pageable, Long loggedInUserId);

    List<CategoryInInterestDto> interestCategory();

    Optional<Interest> findByUserAndPostMeta(User user, PostMeta postMeta);

    long countInterestByPostMetaId(long postMetaId);
}
