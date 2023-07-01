package com.secondhand.region.repository;

import com.secondhand.region.dto.RegionDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface RegionRepositoryCustom {

    Page<RegionDto> findAllRegions(Pageable pageable);
}
