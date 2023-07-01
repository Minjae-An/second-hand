package com.secondhand.region.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;

@Getter
@AllArgsConstructor
public class RegionsDto {
    private Page<RegionDto> regions;
}
