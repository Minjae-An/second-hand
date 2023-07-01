package com.secondhand.user.dto;

import com.secondhand.region.dto.RegionDto;
import com.secondhand.region.entity.Region;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class UserRegionsDto {

    private List<RegionDto> regions;

    public UserRegionsDto(List<Region> regions) {

        this.regions = new ArrayList<>();

        for (Region region : regions) {
            this.regions.add(new RegionDto(region));
        }
    }
}
