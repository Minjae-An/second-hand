package com.secondhand.post.dto;

import com.querydsl.core.annotations.QueryProjection;
import com.secondhand.post.entity.Badge;
import com.secondhand.region.entity.Region;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class PostMetaDto {

    private long id;
    private Region region;
    private String title;
    private Long price;
    private String photoUrl;
    private long viewCount;
    private Badge badge;
    private LocalDateTime postedAt;
    private long chattingCount;
    private long interestCount;
    private boolean interested;

    @QueryProjection
    public PostMetaDto(long id, Region region, String title, Long price, String photoUrl, long viewCount, Badge badge, LocalDateTime postedAt, long chattingCount, long interestCount, boolean isInterested) {
        this.id = id;
        this.region = region;
        this.title = title;
        this.price = price;
        this.photoUrl = photoUrl;
        this.viewCount = viewCount;
        this.badge = badge;
        this.postedAt = postedAt;
        this.chattingCount = chattingCount;
        this.interestCount = interestCount;
        this.interested = isInterested;
    }

    @QueryProjection
    public PostMetaDto(long id, Region region, String title, Long price, String photoUrl, long viewCount, Badge badge, LocalDateTime postedAt) {
        this.id = id;
        this.region = region;
        this.title = title;
        this.price = price;
        this.photoUrl = photoUrl;
        this.viewCount = viewCount;
        this.badge = badge;
        this.postedAt = postedAt;
    }
}
