package com.secondhand.region;

import com.secondhand.region.dto.RegionsDto;
import com.secondhand.region.repository.RegionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RegionService {

    private final RegionRepository regionRepository;

    @Transactional(readOnly = true)
    public RegionsDto findAllRegions(Pageable pageable) {

        return new RegionsDto(regionRepository.findAllRegions(pageable));
    }
}
