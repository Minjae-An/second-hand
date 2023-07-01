package com.secondhand.user.entity;

import com.secondhand.post.entity.Interest;
import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.user.login.dto.UserProfileResponse;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Long githubId;
    private String loginId;
    private String profileUrl;
    private int firstRegionId;
    private Integer secondRegionId;

    @OneToMany(mappedBy = "user")
    private List<Interest> interests = new ArrayList<>();

    public User(UserProfileResponse userProfileResponse) {
        this.githubId = userProfileResponse.getId();
        this.loginId = userProfileResponse.getName();
        this.profileUrl = userProfileResponse.getAvatarUrl();
        this.firstRegionId = 1;
    }

    public User(User unmodifiedUser, PostMyRegionDto postMyRegionDto) {
        this.id = unmodifiedUser.getId();
        this.githubId = unmodifiedUser.getGithubId();
        this.loginId = unmodifiedUser.getLoginId();
        this.profileUrl = unmodifiedUser.getProfileUrl();

        List<Integer> myRegions = postMyRegionDto.getRegions();
        this.firstRegionId = myRegions.get(0);
        if (myRegions.size() == 2) {
            this.secondRegionId = myRegions.get(1);
        }
    }

    // TODO: 테스트에서 사용하기 위한 Builder, 테스트용 코드를 만들어서 사용해도 괜찮을지 학습해보기
    @Builder
    public User(long id, Long githubId, String loginId, String profileUrl, int firstRegionId, Integer secondRegionId) {
        this.id = id;
        this.githubId = githubId;
        this.loginId = loginId;
        this.profileUrl = profileUrl;
        this.firstRegionId = firstRegionId;
        this.secondRegionId = secondRegionId;
    }
}
