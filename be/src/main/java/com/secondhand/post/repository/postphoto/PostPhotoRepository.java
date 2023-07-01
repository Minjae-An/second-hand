package com.secondhand.post.repository.postphoto;

import com.secondhand.post.entity.PostPhoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

public interface PostPhotoRepository extends JpaRepository<PostPhoto, Long>, PostPhotoRepositoryCustom {

    @Modifying
    void deleteAllByPostMetaId(Long postMetaId);
}
