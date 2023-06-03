# Node.js Chat Example

```
😀
node.js로 chating 예제를 간단하게 보여주세요
```

### 🤖 ChatGPT
다음은 Node.js를 사용하여 간단한 채팅 예제를 보여드리겠습니다. 이 예제는 WebSocket을 통해 클라이언트와 서버 간에 실시간 통신을 수행합니다.

먼저, 프로젝트 폴더를 만들고 해당 폴더로 이동합니다. 그리고 다음과 같이 패키지 매니저를 사용하여 필요한 모듈을 설치합니다.

```bash
mkdir chat-example
cd chat-example
npm init -y
npm install express socket.io
```

그런 다음, 프로젝트 폴더에 `server.js`라는 파일을 생성하고 다음 코드를 추가합니다.

```javascript
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server listening on *:3000');
});
```

그런 다음, 프로젝트 폴더에 `public`이라는 폴더를 생성하고 해당 폴더 안에 `index.html` 파일을 생성하고 다음 코드를 추가합니다.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Chat Example</title>
  <style>
    body { margin: 0; padding: 0.5rem; }
    input { margin-right: 0.5rem; }
    #messages { margin-top: 0.5rem; }
  </style>
</head>
<body>
  <ul id="messages"></ul>
  <form id="chat-form">
    <input id="chat-input" autocomplete="off" />
    <button>Send</button>
  </form>

  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();

    document.getElementById('chat-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('chat-input');
      const message = input.value.trim();
      if (message) {
        socket.emit('chat message', message);
        input.value = '';
      }
    });

    socket.on('chat message', (msg) => {
      const li = document.createElement('li');
      li.textContent = msg;
      document.getElementById('messages').appendChild(li);
    });
  </script>
</body>
</html>
```

마지막으로, 터미널에서 다음 명령을 실행하여 서버를 시작합니다.

```bash
node server.js
```

서버가 시작되면 브라우저에서 `http://localhost:3000`을 열고 다른 탭 또는 창에서도 동일한 URL을 엽니다. 이제 두 클라이언트 간에 실시간 채팅이 가능해집니다.