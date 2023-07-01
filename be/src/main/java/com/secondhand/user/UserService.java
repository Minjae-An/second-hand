package com.secondhand.user;

import com.secondhand.post.entity.Interest;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.post.repository.interest.InterestRepository;
import com.secondhand.post.repository.postmeta.PostMetaRepository;
import com.secondhand.region.dto.PostMyRegionDto;
import com.secondhand.region.entity.Region;
import com.secondhand.region.repository.RegionRepository;
import com.secondhand.region.validator.RegionValidator;
import com.secondhand.user.dto.UserRegionsDto;
import com.secondhand.user.entity.User;
import com.secondhand.user.login.dto.LoggedInUser;
import com.secondhand.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PostMetaRepository postMetaRepository;
    private final InterestRepository interestRepository;
    private final RegionRepository regionRepository;

    @Transactional
    public UserRegionsDto getMyRegion(Long userId) {

        if (userId == null) {
            Region defaultRegion = regionRepository.findById(1).get();
            return new UserRegionsDto(List.of(defaultRegion));
        }

        User user = userRepository.findById(userId).orElseThrow(() ->
                new IllegalArgumentException("해당 유저가 존재하지 않습니다.")
        );

        List<Integer> regionIds = getUserRegionIds(user);

        return new UserRegionsDto(regionRepository.findAllRegionsByIdIn(regionIds));
    }

    @Transactional
    public void updateMyRegion(long userId, PostMyRegionDto postMyRegionDto) {

        RegionValidator.isValidRegionId(postMyRegionDto, regionRepository);
        User loggedInUser = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));

        User modifiedUser = new User(loggedInUser, postMyRegionDto);

        userRepository.save(modifiedUser);
    }

    @Transactional
    public void addInterestPost(long postId, LoggedInUser loggedInUser) {

        User user = userRepository.findById(loggedInUser.getId())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));
        PostMeta postMeta = postMetaRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 상품이 존재하지 않습니다."));

        if (postMeta.isDeleted()) {
            throw new IllegalArgumentException("없는 상품입니다.");
        }

        interestRepository.findByUserAndPostMeta(user, postMeta)
                .ifPresent(interest -> {
                    throw new IllegalArgumentException("이미 관심 상품으로 등록된 상품입니다.");
                });

        Interest interest = new Interest(user, postMeta);
        interestRepository.save(interest);
    }

    @Transactional
    public void deleteInterestPost(long postId, LoggedInUser loggedInUser) {

        PostMeta postMeta = postMetaRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당 상품이 존재하지 않습니다."));
        User user = userRepository.findById(loggedInUser.getId())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));
        Interest interest = interestRepository.findByUserAndPostMeta(user, postMeta)
                .orElseThrow(() -> new IllegalArgumentException("해당 관심 상품이 존재하지 않습니다."));

        interestRepository.delete(interest);
    }


    private List<Integer> getUserRegionIds(User user) {

        List<Integer> regionIds = new ArrayList<>();

        regionIds.add(user.getFirstRegionId());

        if (user.getSecondRegionId() != null) {
            regionIds.add(user.getSecondRegionId());
        }
        return regionIds;
    }
}
