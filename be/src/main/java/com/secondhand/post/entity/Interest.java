package com.secondhand.post.entity;

import com.secondhand.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Interest {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_meta_id")
    private PostMeta postMeta;

    public Interest(User user, PostMeta postMeta) {
        this.user = user;
        this.postMeta = postMeta;
    }
}
