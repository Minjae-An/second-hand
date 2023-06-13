package com.secondhand.post.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.dto.QPostMetaDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import java.util.List;

import static com.secondhand.post.entity.QInterest.interest;
import static com.secondhand.post.entity.QPostMeta.postMeta;


public class InterestRepositoryImpl implements InterestRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public InterestRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
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
}
