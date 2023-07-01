package com.secondhand.chatting.repository;

import com.secondhand.chatting.dto.ChattingRoomDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChattingRoomRepositoryCustom {

    long countByPostMetaId(long postMetaId);

    List<ChattingRoomDto> findAllRoom();

    ChattingRoomDto findRoomById(String id);

    ChattingRoomDto createChattingRoom(String name);
}
