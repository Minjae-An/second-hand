package com.secondhand.post.entity;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
public class PostPhoto {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long postMetaId;
    private String photoUrl;

    public PostPhoto(long postId, String photoUrl) {
        this.postMetaId = postId;
        this.photoUrl = photoUrl;
    }
}
