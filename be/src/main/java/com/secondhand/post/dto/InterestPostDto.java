package com.secondhand.post.dto;

import lombok.Getter;

@Getter
public class InterestPostDto {

    private long id;
    private String title;
    private String region;
    private long price;
    private String photoUrl;
    private String postedAt;
    private int chattingCount;
    private int interestCount;

}
