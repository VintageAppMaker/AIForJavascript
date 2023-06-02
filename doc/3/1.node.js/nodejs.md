# Node.js 기초학습 목차

```
😀 node.js를 처음배우는 사람을 위한 기초지식 목차를 정리해주세요
```
### 🤖 ChatGPT
아래는 Node.js를 처음 배우는 사람을 위한 기초 지식 목차입니다:

1. Node.js 소개
   - Node.js의 정의와 목적
   - Node.js의 특징과 장점
   - Node.js의 사용 사례

2. JavaScript 기초
   - JavaScript 문법과 구문
   - 변수, 데이터 타입, 연산자
   - 조건문과 반복문
   - 함수와 객체
   - 콜백 함수 개념 이해

3. Node.js 설치와 설정
   - Node.js 설치 방법
   - npm (Node Package Manager) 소개
   - 프로젝트 디렉토리 설정

4. 모듈과 패키지
   - 모듈 개념 이해
   - 내장 모듈과 외부 패키지
   - npm을 사용한 패키지 설치 및 관리

5. 비동기 프로그래밍
   - 비동기 작업과 콜백 함수
   - 이벤트 루프와 이벤트 기반 프로그래밍
   - Promise와 async/await 사용하기

6. 파일 시스템 다루기
   - 파일 읽기와 쓰기
   - 폴더 생성과 삭제
   - 파일 및 폴더 관련 기능 사용

7. HTTP 서버와 클라이언트
   - HTTP 프로토콜 개요
   - HTTP 모듈을 사용한 서버 생성
   - 요청과 응답 처리

8. Express.js 프레임워크
   - Express.js 소개와 설치
   - 미들웨어 개념 이해
   - 라우팅과 컨트롤러 설정

9. 데이터베이스 연동
   - 데이터베이스 개요
   - MongoDB, MySQL, PostgreSQL 등과의 연동
   - ORM(Object-Relational Mapping) 사용

10. 보안과 인증
    - 사용자 인증과 인가
    - 비밀번호 해싱과 솔트
    - 세션과 쿠키 관리

11. 테스트와 디버깅
    - 테스트의 중요성과 종류
    - 단위 테스트와 통합 테스트 도구
    - 디버깅 기법과 도구 사용

12. 배포와 운영
    - 서버 배포 전략과 도구
    - 클라우드 플랫폼 활용
    - 로깅과 모니터링

이 목차를 참고하여 Node.js를 처음 배우는 사람이 필요로 하는 기초 지식을 습득할 수 있습니다. 중요한 것은 단계별로 천천히 익혀가며 실습을 통해 학습하는 것입니다. 선호하는 온라인 자습서, 도
서, 블로그, 강의 등을 활용하여 학습에 도움을 받을 수도 있습니다.

```
😀 node.js 필수 기초예제 10개를 정리해주세요
```
### 🤖 ChatGPT
Node.js를 처음 배우는 사람을 위한 필수 기초 예제 10개를 정리해보겠습니다:

1. Hello, World 출력하기:
```javascript
console.log("Hello, World!");
```

2. 파일 읽기:
```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

3. HTTP 서버 생성하기:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
```

4. 외부 패키지 설치하고 사용하기:
```javascript
const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

5. Express.js를 사용한 간단한 웹 애플리케이션:
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

6. 비동기 함수와 Promise 사용:
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000)
  .then(() => {
    console.log('Delayed action!');
  });
```

7. 파일 쓰기:
```javascript
const fs = require('fs');

fs.writeFile('file.txt', 'Hello, World!', 'utf8', (err) => {
  if (err) throw err;
  console.log('File saved!');
});
```

8. 데이터베이스 연결과 쿼리 실행:
```javascript
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

connection.connect();

connection.query('SELECT * FROM users', (error, results) => {
  if (error) throw error;
  console.log(results);
});

connection.end();
```

9. 사용자 입력 받기:
```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
```

10. 디버깅하기:
```javascript
const util = require('util');

const debug = util.debuglog('app');

debug('This is a debug message');
```

이 예제들을 통해 기본적인 Node.js 개념과 기능을 익힐 수 있으며, 실습을 통해 더 많은 경험을 쌓을 수 있습니다. 각 예제의 설명과 함께 스스로 코드를 작성하고 실행해 보는 것을 권장합니다.

```
😀 node,js에 url 등록하는 방법과 post, get 방식의 필수예제를 정리해주세요
```

### 🤖 ChatGPT
Node.js에서 URL을 등록하는 방법은 다양한 방법이 있지만, 가장 일반적인 방법은 Express.js를 사용하는 것입니다. 아래는 Express.js를 사용하여 URL을 등록하는 예제입니다:

```javascript
const express = require('express');
const app = express();

// GET 방식의 URL 등록
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// POST 방식의 URL 등록
app.post('/login', (req, res) => {
  // 로그인 로직 처리
  res.send('Logged in successfully!');
});

// 모든 HTTP 메서드에 대한 URL 등록
app.all('/users', (req, res) => {
  // 사용자 관련 로직 처리
  res.send('User data');
});

// 매개변수가 있는 URL 등록
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // 특정 사용자 정보 가져오기
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

위 예제에서 `/hello`는 GET 방식으로 접근 가능한 URL이며, `/login`은 POST 방식으로 접근 가능한 URL입니다. `/users`는 모든 HTTP 메서드(GET, POST, PUT, DELETE 등)에 대해 접근 가능한 URL이며, `/users/:id`는 `id`라는 매개변수를 가진 URL입니다.

이제 POST와 GET 방식에 대한 필수 예제를 정리해보겠습니다:

1. GET 방식으로 데이터 전송하기:
```javascript
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  // 검색 로직 처리
  res.send(`Search Query: ${query}`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

위 예제에서 `/search` URL에 GET 요청을 보내면 `q`라는 쿼리 매개변수를 통해 검색어를 전달할 수 있습니다. 전달받은 검색어를 활용하여 검색 로직을 처리한 후 결과를 반환합니다.

2. POST 방식으로 데이터 전송하기:
```javascript
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // 로그인 로직 처리
  res.send('Logged in successfully!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

위 예제에서 `/login` URL에 POST 요청을 보내면 `username`과 `password`라는 필드를 가진 데이터를 전달할 수 있습니다. 전달받은 데이터를 활용하여 로그인 로직을 처리한 후 성공 메시지를 반환합니다. `express.urlencoded()` 미들웨어를 사용하여 POST 요청의 본문(body) 데이터를 파싱할 수 있도록 설정합니다.

이러한 예제를 통해 GET과 POST 방식으로 데이터를 전송하고 처리하는 방법을 익힐 수 있습니다. 자세한 내용은 Express.js 공식 문서를 참고하시기 바랍니다.

```
😀 express를 사용하면 static html을 전송하는 예제를 보여주세요
```

### 🤖 ChatGPT
Express.js를 사용하여 정적 HTML 파일을 전송하는 예제를 보여드리겠습니다. 아래는 Express.js를 활용하여 정적 파일을 제공하는 방법입니다:

1. 프로젝트 폴더 구조:
```
- project_folder
  - public
    - index.html
    - styles.css
    - script.js
  - server.js
```

2. Express.js 서버 설정:
```javascript
const express = require('express');
const app = express();

// 정적 파일을 제공하기 위해 'public' 디렉토리를 사용합니다.
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

3. HTML 파일 작성:
- `index.html` 파일을 `public` 디렉토리 안에 생성하고 원하는 내용을 작성합니다.

4. 서버 실행:
- 터미널에서 `node server.js`를 실행하여 서버를 시작합니다.

5. 웹 브라우저에서 접속:
- 웹 브라우저에서 `http://localhost:3000`에 접속하면 `index.html` 파일이 로드되고, 해당 파일에 포함된 스타일 시트 및 스크립트도 로드됩니다.

위 예제를 통해 Express.js를 사용하여 정적 HTML 파일을 제공하는 방법을 학습할 수 있습니다. 정적 파일들(HTML, CSS, JavaScript 등)을 `public` 디렉토리에 저장하고, `express.static()` 미들웨어를 사용하여 해당 디렉토리의 파일들을 정적으로 제공합니다.

```
😀 file upload하는 간단한 예제를 보여줘
```

### 🤖 ChatGPT
Express.js를 사용하여 파일 업로드하는 간단한 예제를 보여드리겠습니다.

1. 필요한 패키지 설치하기:
```bash
npm install express multer
```

2. Express.js 서버 설정:
```javascript
const express = require('express');
const multer = require('multer');
const app = express();

// 업로드된 파일을 저장할 디렉토리 설정
const upload = multer({ dest: 'uploads/' });

// 파일 업로드를 처리할 라우트 핸들러
app.post('/upload', upload.single('file'), (req, res) => {
  // 업로드된 파일 정보는 req.file 객체에 저장됩니다.
  if (req.file) {
    res.send('File uploaded successfully!');
  } else {
    res.status(400).send('No file uploaded.');
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

3. HTML 폼 작성:
```html
<!DOCTYPE html>
<html>
<head>
  <title>File Upload</title>
</head>
<body>
  <h1>File Upload</h1>
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Upload</button>
  </form>
</body>
</html>
```

4. 서버 실행:
- 터미널에서 `node server.js`를 실행하여 서버를 시작합니다.

5. 웹 브라우저에서 접속:
- 웹 브라우저에서 `http://localhost:3000`에 접속하여 파일을 선택하고 업로드 버튼을 클릭합니다.

위 예제를 통해 Express.js와 Multer를 사용하여 파일 업로드 기능을 구현하는 방법을 학습할 수 있습니다. 클라이언트에서 `enctype="multipart/form-data"`로 설정된 HTML 폼을 통해 파일을 선택하고 서버로 전송하면 Multer 미들웨어가 업로드된 파일을 처리하고, 결과를 응답으로 반환합니다. 업로드된 파일은 `req.file` 객체를 통해 접근할 수 있습니다.

```
😀 위의 예제에서 문자열로 이름과 나이를 받도록 해주고 파일의 크기도 5 mega byte를 넘으면 받지 못하도록 해줘
```

### 🤖 ChatGPT
파일 업로드 예제에 문자열로 이름과 나이를 받고, 파일 크기를 제한하는 기능을 추가해보겠습니다.

1. 필요한 패키지 설치하기:
```bash
npm install express multer
```

2. Express.js 서버 설정:
```javascript
const express = require('express');
const multer = require('multer');
const app = express();

// 파일 업로드를 처리할 미들웨어 생성
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB 제한
  },
});

// 파일 업로드를 처리할 라우트 핸들러
app.post('/upload', upload.single('file'), (req, res) => {
  // 업로드된 파일 정보는 req.file 객체에 저장됩니다.
  if (req.file) {
    const name = req.body.name;
    const age = req.body.age;
    console.log('Name:', name);
    console.log('Age:', age);
    res.send('File uploaded successfully!');
  } else {
    res.status(400).send('No file uploaded.');
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

3. HTML 폼 작성:
```html
<!DOCTYPE html>
<html>
<head>
  <title>File Upload</title>
</head>
<body>
  <h1>File Upload</h1>
  <form action="/upload" method="POST" enctype="multipart/form-data">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required>
    <br>
    <label for="age">Age:</label>
    <input type="number" name="age" id="age" required>
    <br>
    <label for="file">File:</label>
    <input type="file" name="file" id="file" required>
    <button type="submit">Upload</button>
  </form>
</body>
</html>
```

4. 서버 실행:
- 터미널에서 `node server.js`를 실행하여 서버를 시작합니다.

5. 웹 브라우저에서 접속:
- 웹 브라우저에서 `http://localhost:3000`에 접속하여 이름, 나이, 그리고 파일을 선택하고 업로드 버튼을 클릭합니다. 파일 크기가 5MB를 초과하면 업로드에 실패합니다.

위 예제를 통해 Express.js와 Multer를 사용하여 파일 업로드 기능에 이름과 나이를 추가하고, 파일 크기를 제한하는 방법을 학습할 수 있습니다. `limits` 속성을 사용하여 파일 크기를 제한하였으며, `req.body`를 통해 이름과 나이 데이터를 접근할 수 있습니다.

```
😀 위의 소스에서 http://localhost:3000로 접속했을 때, 파일업로드 Html이 나오도록 추가해주세요 
```

### 🤖 ChatGPT
Express.js 서버 설정에 루트 경로(`/`)에 접속했을 때 파일 업로드 HTML을 보여주는 기능을 추가해보겠습니다.

1. 필요한 패키지 설치하기:
```bash
npm install express multer
```

2. Express.js 서버 설정:
```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// 파일 업로드를 처리할 미들웨어 생성
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB 제한
  },
});

// 파일 업로드를 처리할 라우트 핸들러
app.post('/upload', upload.single('file'), (req, res) => {
  // 업로드된 파일 정보는 req.file 객체에 저장됩니다.
  if (req.file) {
    const name = req.body.name;
    const age = req.body.age;
    console.log('Name:', name);
    console.log('Age:', age);
    res.send('File uploaded successfully!');
  } else {
    res.status(400).send('No file uploaded.');
  }
});

// 루트 경로에 접속했을 때 파일 업로드 HTML을 보여줍니다.
app.get('/', (req, res) => {
  const uploadForm = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>File Upload</title>
    </head>
    <body>
      <h1>File Upload</h1>
      <form action="/upload" method="POST" enctype="multipart/form-data">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required>
        <br>
        <label for="age">Age:</label>
        <input type="number" name="age" id="age" required>
        <br>
        <label for="file">File:</label>
        <input type="file" name="file" id="file" required>
        <button type="submit">Upload</button>
      </form>
    </body>
    </html>
  `;
  res.send(uploadForm);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

위 예제를 통해 루트 경로(`/`)에 접속했을 때 파일 업로드 HTML 폼이 보여지도록 설정했습니다. 루트 경로에 접속하면 HTML 폼이 렌더링되고, 해당 폼을 통해 이름, 나이, 그리고 파일을 선택하여 업로드할 수 있습니다.

```
😀 node.js에서 html 파일에서 전용 tag를 사용하여 프로그래밍하는 예제를 정리해주세요 
```
### 🤖 ChatGPT
Node.js에서 HTML 파일에서 전용 태그를 사용하여 프로그래밍하는 예제를 보여드리겠습니다. 이를 위해 `ejs` (Embedded JavaScript) 템플릿 엔진을 사용할 것입니다.

1. 필요한 패키지 설치하기:
```bash
npm install express ejs
```

2. Express.js 서버 설정:
```javascript
const express = require('express');
const app = express();

// 템플릿 엔진으로 ejs 설정
app.set('view engine', 'ejs');

// 루트 경로에 접속했을 때 HTML 템플릿을 렌더링하여 보여줍니다.
app.get('/', (req, res) => {
  const pageTitle = 'Node.js Programming Example';
  const userList = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 }
  ];
  res.render('index', { pageTitle, userList });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

3. HTML 템플릿 작성 (`views/index.ejs`):
```html
<!DOCTYPE html>
<html>
<head>
  <title><%= pageTitle %></title>
</head>
<body>
  <h1><%= pageTitle %></h1>
  <ul>
    <% for (let user of userList) { %>
      <li>Name: <%= user.name %>, Age: <%= user.age %></li>
    <% } %>
  </ul>
</body>
</html>
```

4. 서버 실행:
- 터미널에서 `node server.js`를 실행하여 서버를 시작합니다.

5. 웹 브라우저에서 접속:
- 웹 브라우저에서 `http://localhost:3000`에 접속하여 HTML 템플릿이 렌더링된 결과를 확인합니다. 페이지 제목과 사용자 리스트가 동적으로 표시됩니다.

위 예제를 통해 Express.js와 ejs 템플릿 엔진을 사용하여 HTML 파일에서 전용 태그(`<% %>`, `<%= %>`)를 사용하여 프로그래밍하는 방법을 학습할 수 있습니다. `res.render()` 메서드를 사용하여 HTML 템플릿을 렌더링하고, 템플릿 안에서 변수를 사용하여 동적인 데이터를 출력할 수 있습니다.

```
ejs의 기초문법을 정리해주세요
```

EJS (Embedded JavaScript)는 JavaScript 코드를 HTML 템플릿 안에 넣어 동적으로 웹 페이지를 생성하는 데 사용되는 템플릿 엔진입니다. EJS의 기초 문법에 대해 정리해드리겠습니다.

1. 변수 출력(`<%= %>`)
- `<%= 변수 %>` 구문을 사용하여 변수의 값을 HTML에 출력합니다.
- 예: `<h1>Welcome, <%= username %>!</h1>`

2. JavaScript 코드 실행(`<% %>`)
- `<% 코드 %>` 구문을 사용하여 JavaScript 코드를 실행합니다.
- 예: `<% if (isLoggedIn) { %><h1>Welcome!</h1><% } %>`

3. 반복문(`<% for (...) { %> ... <% } %>`)
- JavaScript의 `for` 루프를 사용하여 반복적으로 코드를 실행합니다.
- 예: 
  ```html
  <ul>
    <% for (let item of items) { %>
      <li><%= item %></li>
    <% } %>
  </ul>
  ```

4. 조건문(`<% if (...) { %> ... <% } %>`)
- JavaScript의 `if` 문을 사용하여 조건에 따라 특정 코드 블록을 실행합니다.
- 예:
  ```html
  <% if (isLoggedIn) { %>
    <h1>Welcome, <%= username %>!</h1>
  <% } else { %>
    <h1>Please log in.</h1>
  <% } %>
  ```

5. 주석(`<%# 주석 내용 %>`)
- `<%# 주석 내용 %>` 구문을 사용하여 주석을 작성할 수 있습니다.

6. 부분 템플릿(`<%- include('템플릿 파일 경로') %>`)
- 다른 EJS 템플릿 파일을 포함시킬 수 있습니다.
- 예: `<%- include('header.ejs') %>`

위의 기초 문법을 사용하여 EJS 템플릿 엔진을 활용할 수 있습니다. EJS는 HTML 템플릿 안에서 JavaScript 코드를 쉽게 실행할 수 있어 동적인 웹 페이지 생성에 유용합니다. 자세한 문법과 사용 방법은 EJS 공식 문서를 참조하시면 좋습니다.

```
😀 
1. SQLiteDB를 사용합니다.
  - table이름은 t_todo로 합니다. 
  - 필드는 다음과 같습니다. 
    - name은 문자열
    - todo는 문자열
    - day는 날짜
  - SQLiteDB의 파일명은 "test.db"로 합니다.
2. node.js에서 소스를 만듭니다.
  - test.db와 연동합니다. 
  - 추가, 삭제, 보여주기 기능을 구현합니다.

간단한 예제를 만들어주세요
```

### 🤖 ChatGPT
SQLiteDB를 사용하고, "test.db"라는 파일명을 가진 데이터베이스를 생성하여 t_todo라는 테이블을 사용하는 간단한 예제를 만들어보겠습니다. 예제에서는 Node.js와 SQLite3 패키지를 사용합니다.

1. 필요한 패키지 설치하기:
```bash
npm install sqlite3
```

2. 소스 코드 작성:
```javascript
const sqlite3 = require('sqlite3').verbose();

// 데이터베이스 연결
const db = new sqlite3.Database('test.db');

// 테이블 생성
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS t_todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    todo TEXT,
    day TEXT
  )`);
});

// 데이터 추가
function addTodoItem(name, todo, day) {
  db.run(`INSERT INTO t_todo (name, todo, day) VALUES (?, ?, ?)`, [name, todo, day], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Todo item added with ID: ${this.lastID}`);
  });
}

// 데이터 삭제
function deleteTodoItem(id) {
  db.run(`DELETE FROM t_todo WHERE id = ?`, [id], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Deleted todo item with ID: ${id}`);
  });
}

// 데이터 보기
function showTodoItems() {
  db.all(`SELECT * FROM t_todo`, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    rows.forEach(row => {
      console.log(`ID: ${row.id}, Name: ${row.name}, Todo: ${row.todo}, Day: ${row.day}`);
    });
  });
}

// 사용 예시
addTodoItem('John', 'Complete the project', '2023-06-01');
addTodoItem('Jane', 'Buy groceries', '2023-06-02');
showTodoItems();
deleteTodoItem(1);
showTodoItems();

// 데이터베이스 연결 종료
db.close();
```

위의 예제 코드에서는 SQLite3 패키지를 사용하여 SQLite 데이터베이스와 연동하고, t_todo 테이블을 생성합니다. `addTodoItem()`, `deleteTodoItem()`, `showTodoItems()` 함수를 사용하여 데이터를 추가, 삭제, 조회할 수 있습니다. 예제에서는 두 개의 데이터를 추가한 후 전체 데이터를 조회하고, 첫 번째 데이터를 삭제한 후 다시 조회합니다.

위 예제를 실행하면 SQLiteDB와 연동하여 데이터를 추가, 삭제, 조회하는 기능을 가진 간단한 Node.js 애플리케이션을 확인할 수 있습니다.

```
😀 위의 예제를 express로 웹과 연도하는 간단한 예제를 만들어주세요
```

### 🤖 ChatGPT
위의 예제를 기반으로 Express.js를 사용하여 웹과 연동하는 간단한 예제를 만들어보겠습니다.

1. 필요한 패키지 설치하기:
```bash
npm install express sqlite3
```

2. 소스 코드 작성:
```javascript
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('test.db');

// 테이블 생성
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS t_todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    todo TEXT,
    day TEXT
  )`);
});

// 데이터 추가
app.post('/add', (req, res) => {
  const { name, todo, day } = req.body;
  db.run(`INSERT INTO t_todo (name, todo, day) VALUES (?, ?, ?)`, [name, todo, day], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(`Todo item added with ID: ${this.lastID}`);
  });
});

// 데이터 삭제
app.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.run(`DELETE FROM t_todo WHERE id = ?`, [id], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(`Deleted todo item with ID: ${id}`);
  });
});

// 데이터 조회
app.get('/todos', (req, res) => {
  db.all(`SELECT * FROM t_todo`, [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

위의 소스 코드에서는 Express.js를 사용하여 웹 서버를 구성하고, `/add`, `/delete/:id`, `/todos` 경로에 대한 라우트를 정의합니다. 데이터 추가와 삭제는 POST 요청으로 처리하고, 데이터 조회는 GET 요청으로 처리합니다.

위의 코드는 예시일 뿐, 실제 운영 환경에서는 보안 및 에러 처리, 데이터 유효성 검사 등을 추가해야 합니다. 또한, 웹 클라이언트(HTML, CSS, JavaScript)를 구성하여 서버에 요청을 보내고 결과를 표시하는 기능을 추가할 수 있습니다.

위 예제를 실행하면 Express.js와 SQLiteDB를 연동하여 데이터를 추가, 삭제, 조회하는 웹 애플리케이션이 구현됩니다. 각 경로에 요청을 보내어 데이터를 조작하고 결과를 확인할 수 있습니다.

```
😀 위의 예제를 http://localhost:3000/에 접속했을 때, HTML에서 테스트할 수 있도록 만들어주세요
```

### 🤖 ChatGPT
위의 예제를 수정하여 http://localhost:3000/에 접속했을 때, HTML 템플릿을 사용하여 테스트할 수 있는 기능을 추가해보겠습니다.

1. 필요한 패키지 설치하기:
```bash
npm install express sqlite3 ejs
```

2. 소스 코드 작성:
```javascript
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('test.db');

app.set('view engine', 'ejs'); // 템플릿 엔진으로 ejs 설정
app.use(express.urlencoded({ extended: false })); // POST 요청의 body 파싱을 위한 미들웨어

// 테이블 생성
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS t_todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    todo TEXT,
    day TEXT
  )`);
});

// 데이터 추가
app.post('/add', (req, res) => {
  const { name, todo, day } = req.body;
  db.run(`INSERT INTO t_todo (name, todo, day) VALUES (?, ?, ?)`, [name, todo, day], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(`Todo item added with ID: ${this.lastID}`);
  });
});

// 데이터 삭제
app.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.run(`DELETE FROM t_todo WHERE id = ?`, [id], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(`Deleted todo item with ID: ${id}`);
  });
});

// 데이터 조회
app.get('/todos', (req, res) => {
  db.all(`SELECT * FROM t_todo`, [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(rows);
  });
});

// 메인 페이지 렌더링
app.get('/', (req, res) => {
  db.all(`SELECT * FROM t_todo`, [], (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.render('index', { todos: rows });
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

3. HTML 템플릿 작성 (`views/index.ejs`):
```html
<!DOCTYPE html>
<html>
<head>
  <title>Todo List</title>
</head>
<body>
  <h1>Todo List</h1>
  <form method="POST" action="/add">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required><br>
    <label for="todo">Todo:</label>
    <input type="text" name="todo" id="todo" required><br>
    <label for="day">Day:</label>
    <input type="text" name="day" id="day" required><br>
    <button type="submit">Add Todo</button>
  </form>

  <h2>Todo Items:</h2>
  <% if (todos.length === 0) { %
>
    <p>No todo items.</p>
  <% } else { %>
    <ul>
      <% todos.forEach(todo => { %>
        <li><%= todo.name %> - <%= todo.todo %> (Day: <%= todo.day %>)</li>
      <% }); %>
    </ul>
  <% } %>
</body>
</html>
```

위의 코드는 Express.js와 SQLiteDB를 연동하여 데이터를 추가, 삭제, 조회하며, http://localhost:3000/에 접속하면 HTML 템플릿을 렌더링하여 테스트할 수 있는 기능을 제공합니다.

애플리케이션을 실행하고 http://localhost:3000/에 접속하면 Todo List를 관리할 수 있는 HTML 페이지가 표시됩니다. 새로운 Todo 항목을 추가하고, 삭제 버튼을 클릭하여 Todo 항목을 삭제할 수 있습니다. 현재 등록된 Todo 항목들은 리스트로 표시됩니다.

이 예제는 간단한 형태의 HTML 템플릿을 사용하였으며, 보다 복잡한 기능과 디자인을 위해서는 HTML, CSS, JavaScript 등을 추가하여 확장할 수 있습니다.