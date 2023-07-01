package com.secondhand.post.dto;

import com.secondhand.post.entity.PostMeta;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PostDetailPageDto {

    private long id;
    private long sellerId;
    private String sellerName;
    private String title;
    private String category;
    private LocalDateTime postedAt;
    private String content;
    private long chatCount;
    private long interestCount;
    private long viewCount;
    private Long price;
    private BadgeDto badge;
    private Boolean isSeller;
    private List<String> photoUrls;
    private boolean interested;

    public PostDetailPageDto(PostMeta postMeta) {
        this.id = postMeta.getId();
        this.sellerId = postMeta.getSeller().getId();
        this.sellerName = postMeta.getSeller().getLoginId();
        this.title = postMeta.getTitle();
        this.category = postMeta.findPostCategoryName();
        this.postedAt = postMeta.getPostedAt();
        this.chatCount = 0;
        this.viewCount = postMeta.getViewCount();
        this.price = postMeta.getPrice();
        this.badge = new BadgeDto(postMeta.getBadge().getId(), postMeta.findPostMetaState());
        this.isSeller = false;
    }
}
