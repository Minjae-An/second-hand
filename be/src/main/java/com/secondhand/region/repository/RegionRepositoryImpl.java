package com.secondhand.region.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.region.dto.RegionDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.List;

import static com.secondhand.region.entity.QRegion.region;

public class RegionRepositoryImpl implements RegionRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public RegionRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    @Override
    public Page<RegionDto> findAllRegions(Pageable pageable) {

        QueryResults<RegionDto> results = queryFactory
                .select(Projections.constructor(RegionDto.class, region.id, region.name))
                .from(region)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetchResults();

        List<RegionDto> regions = results.getResults();
        long total = results.getTotal();

        return new PageImpl<>(regions, pageable, total);
    }
}
