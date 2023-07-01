package com.secondhand.post.repository.postmeta;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.secondhand.post.dto.PostMetaDto;
import com.secondhand.post.dto.QPostMetaDto;
import com.secondhand.post.dto.SearchCondition;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.List;

import static com.secondhand.chatting.entity.QChattingRoom.chattingRoom;
import static com.secondhand.post.entity.QInterest.interest;
import static com.secondhand.post.entity.QPostMeta.postMeta;

public class PostMetaRepositoryImpl implements PostMetaRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public PostMetaRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    @Override
    public Page<PostMetaDto> findMainPage(Pageable pageable, SearchCondition searchCondition, Long userId) {

        QueryResults<PostMetaDto> result = queryFactory
                .select(new QPostMetaDto(
                        postMeta.id,
                        postMeta.region,
                        postMeta.title,
                        postMeta.price,
                        postMeta.photoUrl,
                        postMeta.viewCount,
                        postMeta.badge,
                        postMeta.postedAt,
                        countChattingRoom(),
                        countInterested(),
                        isInterestedEq(userId)))
                .from(postMeta)
                .where(categoryEq(searchCondition.getCategory()), regionEq(searchCondition.getRegion()), postMeta.deleted.eq(false))
                .orderBy(postMeta.postedAt.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetchResults();

        List<PostMetaDto> content = result.getResults();
        long total = result.getTotal();

        return new PageImpl<>(content, pageable, total);
    }

    private JPQLQuery<Long> countChattingRoom() {

            return JPAExpressions.select(chattingRoom.count())  // 서브쿼리로 interest 카운트
                    .from(chattingRoom)
                    .where(chattingRoom.postMetaId.eq(postMeta.id));
    }

    private JPQLQuery<Long> countInterested() {

        return JPAExpressions.select(interest.count())  // 서브쿼리로 interest 카운트
                .from(interest)
                .where(interest.postMeta.id.eq(postMeta.id));
    }

    private BooleanExpression isInterestedEq(Long userId) {

        if (userId == null) {
            return Expressions.asBoolean(false);
        }

        return JPAExpressions.selectOne()
                .from(interest)
                .where(interest.postMeta.id.eq(postMeta.id).and(interest.user.id.eq(userId)))
                .exists();
    }

    private BooleanExpression categoryEq(Integer category) {

        if (category == null) {
            return null;
        }

        return postMeta.category.id.eq(category);
    }

    private BooleanExpression regionEq(Integer region) {

        if (region == null) {
            return null;
        }

        return postMeta.region.id.eq(region);
    }
}
