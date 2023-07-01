package com.secondhand.chatting;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChattingMessage {

    public enum MessageType {
        ENTER, TALK
    }
    private MessageType type;
    private String roomId;
    private String sender;
    private String message;
}
