package com.secondhand.post;

import com.secondhand.post.dto.CreatePostResponseDto;
import com.secondhand.post.dto.PostSaveDto;
import com.secondhand.post.dto.UpdatePostStateDto;
import com.secondhand.post.entity.Badge;
import com.secondhand.post.entity.Category;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.post.repository.postmeta.PostMetaRepository;
import com.secondhand.region.entity.Region;
import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.login.dto.UserProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.tuple;

@SpringBootTest
class PostServiceTest {

    @Autowired
    private PostService postService;

    @Autowired
    private PostMetaRepository postMetaRepository;

    @Transactional
    @Test
    @DisplayName("사용자는 상품을 등록할 수 있다.")
    void createPostTest() {
        // given
        PostSaveDto postSaveDto = getPostSaveDto();
        LoggedInUser loggedInUser = getLoggedInUser();

        // when
        CreatePostResponseDto post = postService.createPost(postSaveDto, loggedInUser);
        PostMeta postMeta = postMetaRepository.findById(post.getId()).get();

        // then
        assertThat(postMeta.getId()).isEqualTo(post.getId());
    }

    @Transactional
    @Test
    @DisplayName("사용자는 저장한 상품에 대해 soft delete를 할 수 있다.")
    void softDeleteTest() {
        PostSaveDto postSaveDto = getPostSaveDto();
        LoggedInUser loggedInUser = getLoggedInUser();

        // when
        CreatePostResponseDto post = postService.createPost(postSaveDto, loggedInUser);
        postService.deletePost(post.getId(), loggedInUser);
        PostMeta postMeta = postMetaRepository.findById(post.getId()).get();

        // then
        assertThat(postMeta.isDeleted()).isTrue();
    }

    @Transactional
    @Test
    @DisplayName("사용자는 특정 상품을 판매중에서 예약중으로 변경할 수 있다.")
    void updateBadgeTest() {
        // given
        PostSaveDto postSaveDto = getPostSaveDto();
        LoggedInUser loggedInUser = getLoggedInUser();
        UpdatePostStateDto updatePostStateDto = new UpdatePostStateDto(2);

        // when
        CreatePostResponseDto post = postService.createPost(postSaveDto, loggedInUser);
        postService.updateBadge(post.getId(), updatePostStateDto, loggedInUser);
        PostMeta postMeta = postMetaRepository.findById(post.getId()).get();

        // then
        assertThat(postMeta.getBadge().getId()).isEqualTo(2);
    }

    @Transactional(readOnly = true)
    @Test
    @DisplayName("사용자는 상품 상태 업데이트를 위해 모든 배지를 조회할 수 있다.")
    void findAllBadgesTest() {
        // given

        // when
        List<Badge> badges = postService.findBadges().getBadges();

        // then
        assertThat(badges).hasSize(4)
                .extracting("id", "state", "backgroundColor", "fontColor")
                .containsExactlyInAnyOrder(
                        tuple(1, "판매 중", null, null),
                        tuple(2, "예약 중", "#abab12", "#ff0000"),
                        tuple(3, "판매 완료", "#00ff00", "#ff00ff"),
                        tuple(4, "광고", "#000000", "#00ffff")
                );
    }

    private PostMeta createPostMeta() {

        UserProfileResponse userProfileResponse = new UserProfileResponse();
        userProfileResponse.setId(12345L);
        userProfileResponse.setName("sampleUser");
        userProfileResponse.setAvatarUrl("http://example.com/profile.jpg");

        User user = new User(userProfileResponse);

        int regionId = 1;
        String regionName = "Seoul";
        Region region = new Region(regionId, regionName);

        int categoryId = 1;
        String categoryName = "Electronics";
        String categoryPhotoUrl = "http://example.com/category.jpg";
        Category category = new Category(categoryId, categoryName, categoryPhotoUrl);

        int badgeId = 1;
        String badgeState = "active";
        String badgeBackgroundColor = "#FFFFFF";
        String badgeFontColor = "#000000";
        Badge badge = new Badge(badgeId, badgeState, badgeBackgroundColor, badgeFontColor);

        String title = "Sample Post";
        Long price = 10000L;
        String content = "This is a sample post content for testing.";
        List<MultipartFile> photos = new ArrayList<>();
        photos.add(new MockMultipartFile("file", "test.jpg", "image/jpeg", "test-image-content".getBytes()));

        PostSaveDto postSaveDto = new PostSaveDto(title, regionId, categoryId, badgeId, price, content, photos);

        return PostMeta.ofCreated(user, region, category, badge, postSaveDto, "http://example.com/photo.jpg");
    }

    private LoggedInUser getLoggedInUser() {
        User user = User.builder()
                .id(2L)
                .githubId(12345L) // 예시 값. 실제 필요한 값으로 변경하세요.
                .loginId("exampleLoginId") // 예시 값. 실제 필요한 값으로 변경하세요.
                .profileUrl("exampleProfileUrl") // 예시 값. 실제 필요한 값으로 변경하세요.
                .firstRegionId(1) // 예시 값. 실제 필요한 값으로 변경하세요.
                .build();

        return new LoggedInUser(user);
    }

    private PostSaveDto getPostSaveDto() {
        String title = "Example Title";
        int regionId = 1;
        int categoryId = 1;
        int badgeId = 1;
        Long price = 50000L;
        String content = "This is an example content.";
        List<MultipartFile> photos = new ArrayList<>();
        photos.add(new MockMultipartFile("file1", "test1.jpg", "image/jpeg", "test-image-1-content".getBytes()));
        photos.add(new MockMultipartFile("file2", "test2.jpg", "image/jpeg", "test-image-2-content".getBytes()));

        return new PostSaveDto(title, regionId, categoryId, badgeId, price, content, photos);
    }
}