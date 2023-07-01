package com.secondhand.post.repository.postmeta;

import com.secondhand.post.entity.PostMeta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PostMetaRepository extends JpaRepository<PostMeta, Long>, PostMetaRepositoryCustom {

    @Modifying
    @Query("UPDATE PostMeta p SET p.viewCount = p.viewCount + 1 WHERE p.id = :id")
    void updatePostMetaViewCount(@Param("id") Long id);

    Optional<PostMeta> findByIdAndDeletedFalse(Long id);
}