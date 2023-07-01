package com.secondhand.post.repository.postphoto;

import java.util.List;

public interface PostPhotoRepositoryCustom {

    List<String> findAllPhotoUrlsByPostMetaId(long postId);
}
