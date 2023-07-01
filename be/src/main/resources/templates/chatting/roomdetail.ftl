<!doctype html>
<html lang="en">
<head>
    <title>Websocket ChatRoom</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <!-- Bootstrap CSS -->
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
            background-color: #FF8922FF;
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
    <div>
        <h2>{{room.name}}</h2>
    </div>
    <div class="input-group">
        <div class="input-group-prepend">
            <label class="input-group-text">내용</label>
        </div>
        <input type="text" class="form-control" v-model="message" v-on:keypress.enter="sendMessage">
        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="sendMessage">보내기</button>
        </div>
    </div>
    <ul class="list-group">
        <li class="list-group-item" v-for="message in messages">
            {{message.sender}} - {{message.message}}</a>
        </li>
    </ul>
    <div></div>
</div>
<!-- JavaScript -->
<script src="/webjars/vue/2.5.16/dist/vue.min.js"></script>
<script src="/webjars/axios/0.17.1/dist/axios.min.js"></script>
<script src="/webjars/sockjs-client/1.1.2/sockjs.min.js"></script>
<script src="/webjars/stomp-websocket/2.3.3-1/stomp.min.js"></script>
<script>
    //alert(document.title);
    // websocket & stomp initialize
    var sock = new SockJS("/ws-stomp");
    var ws = Stomp.over(sock);
    var reconnect = 0;
    // vue.js
    var vm = new Vue({
        el: '#app',
        data: {
            roomId: '',
            room: {},
            sender: '',
            message: '',
            messages: []
        },
        created() {
            this.roomId = localStorage.getItem('wschat.roomId');
            this.sender = localStorage.getItem('wschat.sender');
            this.findRoom();
        },
        methods: {
            findRoom: function() {
                axios.get('/chatting/room/'+this.roomId).then(response => { this.room = response.data; });
            },
            sendMessage: function() {
                ws.send("/pub/chatting/message", {}, JSON.stringify({type:'TALK', roomId:this.roomId, sender:this.sender, message:this.message}));
                this.message = '';
            },
            recvMessage: function(recv) {
                this.messages.unshift({"type":recv.type,"sender":recv.type=='ENTER'?'[알림]':recv.sender,"message":recv.message})
            }
        }
    });

    function connect() {
        // pub/sub event
        ws.connect({}, function(frame) {
            ws.subscribe("/sub/chatting/room/"+vm.$data.roomId, function(message) {
                var recv = JSON.parse(message.body);
                vm.recvMessage(recv);
            });
            ws.send("/pub/chatting/message", {}, JSON.stringify({type:'ENTER', roomId:vm.$data.roomId, sender:vm.$data.sender}));
        }, function(error) {
            if(reconnect++ < 5) {
                setTimeout(function() {
                    // console.log("connection reconnect");
                    sock = new SockJS("/ws-stomp");
                    ws = Stomp.over(sock);
                    connect();
                },10*1000);
            }
        });
    }
    connect();
</script>
</body>
</html>