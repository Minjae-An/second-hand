package com.secondhand.region.validator;

import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.region.repository.RegionRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class RegionValidator {

    public static void isValidRegionId(PostMyRegionDto postMyRegionDto, RegionRepository repository) {

        List<Integer> regions = postMyRegionDto.getRegions();

        List<Integer> validatedRegions = repository.findAllById(regions)
                .stream()
                .map(region -> region.getId())
                .collect(Collectors.toList());

        if (regions.size() != validatedRegions.size()) {
            throw new IllegalArgumentException("존재하지 않는 지역입니다.");
        }
    }
}
