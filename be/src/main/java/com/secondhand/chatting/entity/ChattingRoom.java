package com.secondhand.chatting.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ChattingRoom {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long postMetaId;
    private long buyerId;
}
