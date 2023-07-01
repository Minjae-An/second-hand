package com.secondhand.post.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MyPostDto {

    private long id;
    private String title;
    private String photoUrl;
    private String region;
    private String postStatus;
    private String interestStatus;
    private Long price;
    private LocalDateTime postedAt;
    private long chattingCount;
    private long interestCount;

}
