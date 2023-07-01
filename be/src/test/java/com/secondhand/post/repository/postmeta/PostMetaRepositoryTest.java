package com.secondhand.post.repository.postmeta;

import com.secondhand.post.entity.PostMeta;
import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.login.dto.UserProfileResponse;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.BDDMockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@Transactional
@SpringBootTest
class PostMetaRepositoryTest {

    @MockBean
    private PostMetaRepository postMetaRepository;

    @Test
    @DisplayName("사용자는 빈 저장소에 글을 저장하면, 1개가 저장된다.")
    void test() {
        // given
        BDDMockito.given(postMetaRepository.save(any(PostMeta.class))).willReturn(new PostMeta());
        // when
        when(postMetaRepository.findAll()).thenReturn(List.of(new PostMeta()));
        List<PostMeta> all = postMetaRepository.findAll();
        // then
        Assertions.assertThat(all).hasSize(1);
    }


    private LoggedInUser getLoggedInUser() {
        UserProfileResponse userProfileResponse = new UserProfileResponse();
        userProfileResponse.setId(200L);
        userProfileResponse.setName("test");
        userProfileResponse.setAvatarUrl("test");

        User user = new User(userProfileResponse);

        LoggedInUser loggedInUser = new LoggedInUser(user);
        return loggedInUser;
    }
}