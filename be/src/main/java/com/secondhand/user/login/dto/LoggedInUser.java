package com.secondhand.user.login.dto;

import com.secondhand.user.entity.User;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class LoggedInUser {

    private long id;
    private long githubId;
    private String loginId;
    private String profileUrl;

    @Builder
    public LoggedInUser(User user) {
        this.id = user.getId();
        this.githubId = user.getGithubId();
        this.loginId = user.getLoginId();
        this.profileUrl = user.getProfileUrl();
    }
}
