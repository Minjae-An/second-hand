package com.secondhand.post.dto;

import com.secondhand.post.entity.Badge;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class BadgesDto {

    private List<Badge> badges;
}
