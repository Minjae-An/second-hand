package com.secondhand.region.repository;

import com.secondhand.region.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegionRepository extends JpaRepository<Region, Integer>, RegionRepositoryCustom {

    List<Region> findAllRegionsByIdIn(List<Integer> regionIds);
}
