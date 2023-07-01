package com.secondhand.post.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Badge {

    @Id @GeneratedValue
    private int id;

    private String state;
    private String backgroundColor;
    private String fontColor;
}
