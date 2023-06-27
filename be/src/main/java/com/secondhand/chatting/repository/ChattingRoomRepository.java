package com.secondhand.chatting.repository;

import com.secondhand.chatting.entity.ChattingRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChattingRoomRepository extends JpaRepository<ChattingRoom, Long>, ChattingRoomRepositoryCustom {
}
