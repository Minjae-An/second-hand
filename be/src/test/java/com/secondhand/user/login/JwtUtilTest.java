package com.secondhand.user.login;

import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.login.dto.UserProfileResponse;
import com.secondhand.user.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class JwtUtilTest {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private LoginService loginService;

    @Autowired
    private UserRepository userRepository;

    @DisplayName("유저가 로그인을 하면 해당 유저의 정보가 담긴 JWT 토근을 만들 수 있다.")
    @Test
    void testCreateToken() {

        // given
        LoggedInUser loggedInUser = getLoggedInUser();

        // when
        String token = jwtUtil.createToken(loggedInUser, new Date(new Date().getTime() + 3600000));
        LoggedInUser extractedUserFromToken = jwtUtil.extractedUserFromToken(token);

        // then
        assertThat(loggedInUser.getId()).isEqualTo(extractedUserFromToken.getId());
        assertThat(loggedInUser.getGithubId()).isEqualTo(extractedUserFromToken.getGithubId());
        assertThat(loggedInUser.getLoginId()).isEqualTo(extractedUserFromToken.getLoginId());
        assertThat(loggedInUser.getProfileUrl()).isEqualTo(extractedUserFromToken.getProfileUrl());
        assertThat(loggedInUser.getFirstRegionId()).isEqualTo(extractedUserFromToken.getFirstRegionId());
        assertThat(loggedInUser.getSecondRegionId()).isEqualTo(extractedUserFromToken.getSecondRegionId());
    }

    @DisplayName("조작된 토큰이 들어오면 false를 반환한다")
    @Test
    void testManipulatedToken() {

        // given
        LoggedInUser loggedInUser = getLoggedInUser();
        String token = jwtUtil.createToken(loggedInUser, new Date(new Date().getTime() + 3600000));

        // when
        boolean validated = jwtUtil.validateTokenIsManipulated(token + "a");

        // then
        assertThat(validated).isFalse();
    }

    @DisplayName("만료된 토큰이 들어오면 false를 반환한다.")
    @Test
    void testExpiredToken() {

        // given
        LoggedInUser loggedInUser = getLoggedInUser();
        String token = jwtUtil.createToken(loggedInUser, new Date(new Date().getTime() - 3600000));

        // when
        boolean validated = jwtUtil.validateTokenIsExpired(token);

        // then
        assertThat(validated).isFalse();
    }

    @DisplayName("회원가입을 하면 유저 정보를 저장한다.")
    @Transactional
    @Test
    void testCreateUser() {

        // given
        UserProfileResponse userProfileResponse = new UserProfileResponse();
        userProfileResponse.setId(200L);
        userProfileResponse.setName("test");
        userProfileResponse.setAvatarUrl("test");

        // when
        LoggedInUser user = loginService.createUser(userProfileResponse);
        User foundUser = userRepository.findById(user.getId()).orElseThrow();

        // then
        assertThat(user.getId()).isEqualTo(foundUser.getId());
    }

    @DisplayName("이미 가입된 유저는 회원가입을 하지 않는다.")
    @Transactional
    @Test
    void testDuplicatedUser() {

        // given
        UserProfileResponse userProfileResponse = new UserProfileResponse();
        userProfileResponse.setId(200L);
        userProfileResponse.setName("test");
        userProfileResponse.setAvatarUrl("test");

        // when
        LoggedInUser user = loginService.createUser(userProfileResponse);
        LoggedInUser duplicatedUser = loginService.createUser(userProfileResponse);
        List<User> signedInUsers = userRepository.findAllById(Collections.singleton(user.getId()));

        // then
        assertThat(signedInUsers).hasSize(1);
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