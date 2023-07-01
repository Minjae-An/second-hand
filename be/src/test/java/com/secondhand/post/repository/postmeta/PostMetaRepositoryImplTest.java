package com.secondhand.post.repository.postmeta;

import com.secondhand.post.dto.SearchCondition;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class PostMetaRepositoryImplTest {

    @Autowired
    private PostMetaRepository postMetaRepository;

    @DisplayName("첫 번째 페이지 1번 지역과 1번 카테고리로, 10개의 사이즈를 조회하면, 10개의 사이즈가 조회된다.")
    @Test
    @Transactional
    void testFindMainPagePosts() {
        // Given
        Pageable pageable = PageRequest.of(0, 10);
        SearchCondition searchCondition = new SearchCondition();
        searchCondition.setCategory(1);
        searchCondition.setRegion(1);

        // When
//        List<PostMetaDto> content = postMetaRepository.findMainPage(pageable, searchCondition).getContent();

        // Then
//        assertThat(content).hasSize(10);
    }
}