<!doctype html>
<html lang="en">
<head>
    <title>Websocket Chat</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/4.3.1/dist/css/bootstrap.min.css">
    <style>
        [v-cloak] {
            display: none;
        }

        body {
            background-image: url('https://user-images.githubusercontent.com/115435784/248998187-406280f7-259f-4672-bced-c9df0b6906cd.png');
            background-size: 40%; /* 배경 이미지를 화면에 맞게 조절 */
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed; /* 스크롤 시 배경 이미지가 고정되도록 설정 */
            background-color: #FFC022FF;
            opacity: 0.7;
        }

        /* 주황색으로 테마를 설정합니다 */
        .btn-primary {
            background-color: #ffc022;
            border-color: #ff5722;
        }

        .list-group-item-action:hover, .list-group-item-action:focus {
            background-color: #FF8922FF;
            color: white;
        }

        .input-group-text {
            background-color: #FF8922FF;
            border-color: #ff5722;
            color: white;
        }

        h3 {
            color: #ff5722;
        }
    </style>
</head>
<body>
<div class="container" id="app" v-cloak>
    <div class="row">
        <div class="col-md-12">
            <h3>채팅방 리스트</h3>
        </div>
    </div>
    <div class="input-group">
        <div class="input-group-prepend">
            <label class="input-group-text" >방제목</label>
        </div>
        <input type="text" class="form-control" v-model="room_name" v-on:keyup.enter="createRoom">
        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="createRoom">채팅방 개설</button>
        </div>
    </div>
    <ul class="list-group">
        <li class="list-group-item list-group-item-action" v-for="item in chatrooms" v-bind:key="item.roomId" v-on:click="enterRoom(item.roomId)">
            {{item.name}}
        </li>
    </ul>
</div>
<!-- JavaScript -->
<script src="/webjars/vue/2.5.16/dist/vue.min.js"></script>
<script src="/webjars/axios/0.17.1/dist/axios.min.js"></script>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            room_name : '',
            chatrooms: [
            ]
        },
        created() {
            this.findAllRoom();
        },
        methods: {
            findAllRoom: function() {
                axios.get('/chatting/rooms').then(response => { this.chatrooms = response.data; });
            },
            createRoom: function() {
                if("" === this.room_name) {
                    alert("방 제목을 입력해 주십시요.");
                    return;
                } else {
                    var params = new URLSearchParams();
                    params.append("name",this.room_name);
                    axios.post('/chatting/room', params)
                        .then(
                            response => {
                                alert(response.data.name+"방 개설에 성공하였습니다.")
                                this.room_name = '';
                                this.findAllRoom();
                            }
                        )
                        .catch( response => { alert("채팅방 개설에 실패하였습니다."); } );
                }
            },
            enterRoom: function(roomId) {
                var sender = prompt('대화명을 입력해 주세요.');
                if(sender != "") {
                    localStorage.setItem('wschat.sender',sender);
                    localStorage.setItem('wschat.roomId',roomId);
                    location.href="/chatting/room/enter/"+roomId;
                }
            }
        }
    });
</script>
</body>
</html>