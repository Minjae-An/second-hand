package com.secondhand.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter @Setter @AllArgsConstructor
public class PostSaveDto {

    @NotNull
    @Size(min = 1, max = 63)
    private String title;
    @NotNull
    private int regionId;
    @NotNull
    private int categoryId;
    private int badgeId;
    @Range(min = 0, max = 100000000)
    private Long price;
    @NotNull
    @Size(min = 1, max = 1000)
    private String content;
    @NotNull
    @Size(min = 1, max = 10)
    private List<MultipartFile> photos;
}
