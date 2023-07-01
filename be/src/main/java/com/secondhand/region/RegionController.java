package com.secondhand.region;

import com.secondhand.region.dto.RegionsDto;
import com.secondhand.util.CustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/regions")
public class RegionController {

    private final RegionService regionService;

    @GetMapping
    public ResponseEntity<CustomResponse<RegionsDto>> getRegionList(Pageable pageable) {

        return ResponseEntity
                .ok()
                .body(new CustomResponse<>(
                        "success",
                        200,
                        "지역 목록 조회 성공",
                        regionService.findAllRegions(pageable))
                );
    }
}
