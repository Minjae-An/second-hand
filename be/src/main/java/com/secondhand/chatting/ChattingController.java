package com.secondhand.chatting;

import com.secondhand.chatting.repository.ChattingRoomRepositoryImpl;
import com.secondhand.chatting.service.RedisPublisher;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Slf4j
@RequiredArgsConstructor
@Controller
public class ChattingController {

    private final RedisPublisher redisPublisher;
    private final ChattingRoomRepositoryImpl chattingRoomRepository;

    @MessageMapping("/chatting/message")
    public void message(ChattingMessage message) {
        log.info("message() called: " + message);
        log.info("message() roomId: " + message.getRoomId());

        if (ChattingMessage.MessageType.ENTER.equals(message.getType())) {
            chattingRoomRepository.enterChattingRoom(message.getRoomId());
            message.setMessage(message.getSender() + "님이 입장하셨습니다.");
        }

        redisPublisher.publish(chattingRoomRepository.getTopic(message.getRoomId()), message);
    }
}
