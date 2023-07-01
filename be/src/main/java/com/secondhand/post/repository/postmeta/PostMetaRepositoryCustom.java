package com.secondhand.post.repository.postmeta;

import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.dto.SearchCondition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PostMetaRepositoryCustom {

    Page<PostMetaDto> findMainPage(Pageable pageable, SearchCondition searchCondition, Long userId);
}
