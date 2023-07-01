package com.secondhand.chatting;

import com.secondhand.chatting.dto.ChattingRoomDto;
import com.secondhand.chatting.repository.ChattingRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@Controller
@RequestMapping("/chatting")
public class ChattingRoomController {

    private final ChattingRoomRepository chattingRoomRepository;

    @GetMapping("/room")
    public String rooms(Model model) {

        System.out.println("rooms() called");

        return "chatting/room";
    }

    @GetMapping("/rooms")
    @ResponseBody
    public List<ChattingRoomDto> room() {

        return chattingRoomRepository.findAllRoom();
    }

    @PostMapping("/room")
    @ResponseBody
    public ChattingRoomDto createRoom(@RequestParam String name) {

        System.out.println("createRoom() called: " + name);

        return chattingRoomRepository.createChattingRoom(name);
    }

    @GetMapping("/room/enter/{roomId}")
    public String roomDetail(Model model, @PathVariable String roomId) {

        model.addAttribute("roomId", roomId);
        return "chatting/roomdetail";
    }

    @GetMapping("/room/{roomId}")
    @ResponseBody
    public ChattingRoomDto roomInfo(@PathVariable String roomId) {

        return chattingRoomRepository.findRoomById(roomId);
    }
}
