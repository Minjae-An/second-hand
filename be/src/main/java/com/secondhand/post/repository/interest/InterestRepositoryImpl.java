package com.secondhand.post.repository.interest;

import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.category.dto.CategoryInInterestDto;
import com.secondhand.category.dto.QCategoryInInterestDto;
import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.dto.QPostMetaDto;
import com.secondhand.post.entity.Interest;
import com.secondhand.post.entity.PostMeta;
import com.secondhand.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

import static com.secondhand.post.entity.QInterest.interest;
import static com.secondhand.post.entity.QPostMeta.postMeta;


public class InterestRepositoryImpl implements InterestRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public InterestRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    @Override
    public Page<PostMetaDto> findMyInterestsPosts(Pageable pageable, Long loggedInUserId) {

        QueryResults<PostMetaDto> results = queryFactory
                .select(new QPostMetaDto(
                        postMeta.id,
                        postMeta.region,
                        postMeta.title,
                        postMeta.price,
                        postMeta.photoUrl,
                        postMeta.viewCount,
                        postMeta.badge,
                        postMeta.postedAt))
                .from(interest)
                .innerJoin(interest.postMeta, postMeta)
                .where(interest.user.id.eq(loggedInUserId))
                .orderBy(postMeta.postedAt.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetchResults();

        List<PostMetaDto> postMetaDtos = results.getResults();
        long total = results.getTotal();

        return new PageImpl<>(postMetaDtos, pageable, total);
    }

    public List<CategoryInInterestDto> interestCategory() {
        return queryFactory
                .select(new QCategoryInInterestDto(
                        postMeta.category.id,
                        postMeta.category.name))
                .from(interest)
                .innerJoin(interest.postMeta, postMeta)
                .orderBy(postMeta.category.id.asc())
                .distinct()
                .fetch();
    }

    @Override
    public Optional<Interest> findByUserAndPostMeta(User user, PostMeta postMeta) {

        return Optional.ofNullable(queryFactory
                .selectFrom(interest)
                .where(interest.user.id.eq(user.getId()), interest.postMeta.id.eq(postMeta.getId()))
                .fetchOne());
    }

    @Override
    public long countInterestByPostMetaId(long postMetaId) {
        return queryFactory
                .select(interest)
                .from(interest)
                .where(interest.postMeta.id.eq(postMetaId))
                .fetchCount();
    }

}
