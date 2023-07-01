package com.secondhand.region.dto;

import lombok.Getter;

import javax.validation.constraints.Size;
import java.util.List;

@Getter
public class PostMyRegionDto {
    @Size(min = 1, max = 2)
    private List<Integer> regions;
}
