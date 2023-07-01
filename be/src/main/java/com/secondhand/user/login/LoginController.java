package com.secondhand.user.login;

import com.secondhand.user.login.dto.GithubToken;
import com.secondhand.user.login.dto.JWTResponse;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.login.dto.UserProfileResponse;
import com.secondhand.util.CustomResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@Slf4j
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;
    private final JwtUtil jwtUtil;

    @GetMapping("/oauth")
    public ResponseEntity<CustomResponse<JWTResponse>> githubLogin(String code, HttpServletResponse response) {

        GithubToken githubToken = loginService.getAccessToken(code);
        response.setHeader("Authorization", "application/json");

        UserProfileResponse userProfile = loginService.getUserProfile(githubToken.getAccessToken());
        LoggedInUser loggedInUser = loginService.createUser(userProfile);

        Date expiredDate = new Date(new Date().getTime() + 3600000);

        String token = jwtUtil.createToken(loggedInUser, expiredDate);

        return ResponseEntity
                .ok()
                .body(new CustomResponse(
                        "success",
                        200,
                        "로그인 성공",
                        new JWTResponse(token)
                ));
    }
}
