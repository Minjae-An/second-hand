package com.secondhand.post.repository.postphoto;

import com.querydsl.jpa.impl.JPAQueryFactory;

import java.util.List;

import static com.secondhand.post.entity.QPostPhoto.postPhoto;

public class PostPhotoRepositoryImpl implements PostPhotoRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public PostPhotoRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    @Override
    public List<String> findAllPhotoUrlsByPostMetaId(long postId) {

        return queryFactory
                .select(postPhoto.photoUrl)
                .from(postPhoto)
                .where(postPhoto.postMetaId.eq(postId))
                .fetch();
    }
}
