package com.secondhand.post;

import com.secondhand.post.dto.CreatePostResponseDto;
import com.secondhand.post.dto.PostSaveDto;
import com.secondhand.post.dto.SearchCondition;
import com.secondhand.user.entity.User;
import com.secondhand.user.login.JwtUtil;
import com.secondhand.user.login.dto.LoggedInUser;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Collections;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PostController.class)
class PostControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PostService postService;

    @MockBean
    private JwtUtil jwtUtil;

    @Test
    @DisplayName("메인 화면을 조회하고 정상적인 경우 상태코드 200을 반환한다.")
    void getPostTest() throws Exception {
        // given
        Pageable pageable = PageRequest.of(0, 10);
        SearchCondition searchCondition = new SearchCondition();
        searchCondition.setCategory(1);
        searchCondition.setRegion(1);

        // when // then
        mockMvc.perform(MockMvcRequestBuilders.get("/posts")
                        .param("page", String.valueOf(pageable.getPageNumber()))
                        .param("size", String.valueOf(pageable.getPageSize()))
                        .param("category", String.valueOf(searchCondition.getCategory()))
                        .param("region", String.valueOf(searchCondition.getRegion())))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("메인 화면 조회 성공"));
    }

    @Test
    @DisplayName("판매글을 정상적으로 생성하고 200 상태 코드를 반환하는지 확인한다.")
    void createPostTest() throws Exception {
        // given
        PostSaveDto postSaveDto = getPostSaveDto();

        User user = User.builder()
                .id(2L)
                .githubId(12345L)
                .loginId("exampleLoginId")
                .profileUrl("exampleProfileUrl")
                .firstRegionId(1)
                .build();

        LoggedInUser mockUser = new LoggedInUser(user);

        CreatePostResponseDto mockResponse = new CreatePostResponseDto(1L);

        // when  interceptor 에서 검증 통과하도록 mocking
        when(postService.createPost(Mockito.any(), Mockito.any())).thenReturn(mockResponse);

        when(jwtUtil.validateTokenIsManipulated(anyString())).thenReturn(true);
        when(jwtUtil.validateTokenIsExpired(anyString())).thenReturn(true);
        when(jwtUtil.extractedUserFromToken(anyString())).thenReturn(mockUser);

        // then
        mockMvc.perform(MockMvcRequestBuilders.multipart("/posts")
                        .file(mockMultipartFile())
                        .param("title", postSaveDto.getTitle())
                        .param("regionId", String.valueOf(postSaveDto.getRegionId()))
                        .param("categoryId", String.valueOf(postSaveDto.getCategoryId()))
                        .param("badgeId", String.valueOf(postSaveDto.getBadgeId()))
                        .param("price", String.valueOf(postSaveDto.getPrice()))
                        .param("content", postSaveDto.getContent())
                        .header("Authorization", "Bearer token")
                        .sessionAttr("loggedInUser", mockUser))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("success"))
                .andExpect(jsonPath("$.code").value(200))
                .andExpect(jsonPath("$.message").value("판매글 생성 성공"))
                .andExpect(jsonPath("$.data.id").value(1L));
    }

    private MockMultipartFile mockMultipartFile() {
        return new MockMultipartFile(
                "photos", "sample.jpg", "image/jpeg", "sample-image".getBytes()
        );
    }

    private PostSaveDto getPostSaveDto() {
        return new PostSaveDto(
                "Sample Title", 1, 1, 1, 10000L,
                "Sample Content",
                Collections.singletonList(mockMultipartFile())
        );
    }
}