자바스크립트 슈팅게임 만들기
```
😀 javascript로 초간단 슈팅게임을 만들어줘
```
### 🤖 ChatGPT
아래는 JavaScript로 초간단한 슈팅 게임을 만들 수 있는 예제입니다:

```javascript
// HTML에 <canvas id="gameCanvas" width="400" height="400"></canvas> 요소를 추가해주세요.

// 캔버스 요소 가져오기
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// 플레이어 설정
const player = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  width: 10,
  height: 10,
  color: "#0095DD",
  speed: 5
};

// 키 입력 처리
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let leftPressed = false;
let rightPressed = false;

function handleKeyDown(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = true;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = true;
  }
}

function handleKeyUp(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = false;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = false;
  }
}

// 게임 루프
function draw() {
  // 캔버스 초기화
  context.clearRect(0, 0, canvas.width, canvas.height);

  // 플레이어 그리기
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fillStyle = player.color;
  context.fill();
  context.closePath();

  // 플레이어 이동
  if (leftPressed && player.x > 0) {
    player.x -= player.speed;
  } else if (rightPressed && player.x + player.width < canvas.width) {
    player.x += player.speed;
  }

  // 다음 프레임 그리기
  requestAnimationFrame(draw);
}

// 게임 시작
draw();
```

위의 예제는 `gameCanvas`라는 id를 가진 `<canvas>` 요소를 HTML에 추가한 후, JavaScript 코드를 이용하여 게임을 만드는 방식입니다. 이 예제에서는 플레이어를 움직일 수 있으며, 키보드의 왼쪽 화살표와 오른쪽 화살표 키를 사용합니다. 또한 게임 루프를 사용하여 프레임마다 게임 화면을 업데이트합니다. 이 코드는 초보자를 위한 초간단한 예제이므로 게임에 추가적인 요소를 추가하려면 더 많은 코드가 필요할 수 있습니다.
```
😀 위의 예제를 HTML과 javascript로 분리해서 실행가능하도록 만들어주세요
```
### 🤖 ChatGPT
HTML과 JavaScript를 분리하여 실행 가능하도록 코드를 작성하겠습니다.

**index.html**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>간단한 슈팅 게임</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="400" height="400"></canvas>
  <script src="game.js"></script>
</body>
</html>
```

**game.js**:

```javascript
// 캔버스 요소 가져오기
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// 플레이어 설정
const player = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  width: 10,
  height: 10,
  color: "#0095DD",
  speed: 5
};

// 키 입력 처리
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let leftPressed = false;
let rightPressed = false;

function handleKeyDown(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = true;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = true;
  }
}

function handleKeyUp(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = false;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = false;
  }
}

// 게임 루프
function draw() {
  // 캔버스 초기화
  context.clearRect(0, 0, canvas.width, canvas.height);

  // 플레이어 그리기
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fillStyle = player.color;
  context.fill();
  context.closePath();

  // 플레이어 이동
  if (leftPressed && player.x > 0) {
    player.x -= player.speed;
  } else if (rightPressed && player.x + player.width < canvas.width) {
    player.x += player.speed;
  }

  // 다음 프레임 그리기
  requestAnimationFrame(draw);
}

// 게임 시작
draw();
```

위의 코드를 `index.html` 파일과 `game.js` 파일로 분리하여 사용하시면 됩니다. `index.html` 파일을 브라우저에서 열면 간단한 슈팅 게임이 실행됩니다.
```
😀 위의 예제에서 space key를 누르면 총알이 위로 올라가게 소스를 만들어줘
```
### 🤖 ChatGPT
아래는 `space` 키를 누르면 총알이 위로 올라가는 기능을 추가한 코드입니다.

**index.html**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>간단한 슈팅 게임</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="400" height="400"></canvas>
  <script src="game.js"></script>
</body>
</html>
```

**game.js**:

```javascript
// 캔버스 요소 가져오기
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// 플레이어 설정
const player = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  width: 10,
  height: 10,
  color: "#0095DD",
  speed: 5
};

// 총알 설정
const bullet = {
  x: player.x,
  y: player.y,
  width: 2,
  height: 10,
  color: "#FF0000",
  speed: 5,
  isFired: false
};

// 키 입력 처리
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let leftPressed = false;
let rightPressed = false;
let spacePressed = false;

function handleKeyDown(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = true;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = true;
  } else if (event.key === " ") {
    spacePressed = true;
  }
}

function handleKeyUp(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = false;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = false;
  } else if (event.key === " ") {
    spacePressed = false;
  }
}

// 게임 루프
function draw() {
  // 캔버스 초기화
  context.clearRect(0, 0, canvas.width, canvas.height);

  // 플레이어 그리기
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fillStyle = player.color;
  context.fill();
  context.closePath();

  // 총알 그리기
  if (bullet.isFired) {
    context.beginPath();
    context.rect(bullet.x, bullet.y, bullet.width, bullet.height);
    context.fillStyle = bullet.color;
    context.fill();
    context.closePath();
    bullet.y -= bullet.speed;
  }

  // 플레이어 이동
  if (leftPressed && player.x > 0) {
    player.x -= player.speed;
  } else if (rightPressed && player.x + player.width < canvas.width) {
    player.x += player.speed;
  }

  // 총알 발사
  if (spacePressed && !bullet.isFired) {
    bullet.x = player.x + player.width / 2;
    bullet.y = player.y;
    bullet.isFired = true;
  }

  // 다음 프레임 그리기
  requestAnimationFrame(draw);
}

// 게임 시작
draw();
```

```
😀 위의 소스는 space를 누르면 1번 밖에 총알이 나가지 않아! space를 누를 때마다 계속 발사하게 만들어줘
```

### 🤖 ChatGPT
총알을 반복해서 발사할 수 있도록 코드를 수정하겠습니다.

**index.html**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>간단한 슈팅 게임</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="400" height="400"></canvas>
  <script src="game.js"></script>
</body>
</html>
```

**game.js**:

```javascript
// 캔버스 요소 가져오기
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// 플레이어 설정
const player = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  width: 10,
  height: 10,
  color: "#0095DD",
  speed: 5
};

// 총알 설정
const bullets = [];
const bulletWidth = 2;
const bulletHeight = 10;
const bulletColor = "#FF0000";
const bulletSpeed = 5;

// 키 입력 처리
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let leftPressed = false;
let rightPressed = false;
let spacePressed = false;

function handleKeyDown(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = true;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = true;
  } else if (event.key === " ") {
    spacePressed = true;
  }
}

function handleKeyUp(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = false;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = false;
  } else if (event.key === " ") {
    spacePressed = false;
  }
}

// 게임 루프
function draw() {
  // 캔버스 초기화
  context.clearRect(0, 0, canvas.width, canvas.height);

  // 플레이어 그리기
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fillStyle = player.color;
  context.fill();
  context.closePath();

  // 총알 그리기
  bullets.forEach((bullet) => {
    context.beginPath();
    context.rect(bullet.x, bullet.y, bullet.width, bullet.height);
    context.fillStyle = bullet.color;
    context.fill();
    context.closePath();
    bullet.y -= bullet.speed;
  });

  // 플레이어 이동
  if (leftPressed && player.x > 0) {
    player.x -= player.speed;
  } else if (rightPressed && player.x + player.width < canvas.width) {
    player.x += player.speed;
  }

  // 총알 발사
  if (spacePressed) {
    const newBullet = {
      x: player.x + player.width / 2,
      y: player.y,
      width: bulletWidth,
      height: bulletHeight,
      color: bulletColor,
      speed: bulletSpeed
    };
    bullets.push(newBullet);
  }

  // 다음 프레임 그리기
  requestAnimationFrame(draw);
}

// 게임 시작
draw();
```

위의 코드는 `bullets
```
😀 위의 소스에서 space를 누르면 3초 안에는 총알이 발사되지 못하게 구현해줘
```
### 🤖 ChatGPT
space를 눌렀을 때 3초 동안 총알이 발사되지 않도록 코드를 수정하겠습니다. 

**index.html**:

```html
<!DOCTYPE html>
<html>
<head>
  <title>간단한 슈팅 게임</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="400" height="400"></canvas>
  <script src="game.js"></script>
</body>
</html>
```

**game.js**:

```javascript
// 캔버스 요소 가져오기
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// 플레이어 설정
const player = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  width: 10,
  height: 10,
  color: "#0095DD",
  speed: 5
};

// 총알 설정
const bullets = [];
const bulletWidth = 2;
const bulletHeight = 10;
const bulletColor = "#FF0000";
const bulletSpeed = 5;

// 키 입력 처리
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
let lastBulletTime = 0;

function handleKeyDown(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = true;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = true;
  } else if (event.key === " ") {
    spacePressed = true;
  }
}

function handleKeyUp(event) {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = false;
  } else if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = false;
  } else if (event.key === " ") {
    spacePressed = false;
  }
}

// 게임 루프
function draw() {
  // 캔버스 초기화
  context.clearRect(0, 0, canvas.width, canvas.height);

  // 플레이어 그리기
  context.beginPath();
  context.rect(player.x, player.y, player.width, player.height);
  context.fillStyle = player.color;
  context.fill();
  context.closePath();

  // 총알 그리기
  bullets.forEach((bullet) => {
    context.beginPath();
    context.rect(bullet.x, bullet.y, bullet.width, bullet.height);
    context.fillStyle = bullet.color;
    context.fill();
    context.closePath();
    bullet.y -= bullet.speed;
  });

  // 플레이어 이동
  if (leftPressed && player.x > 0) {
    player.x -= player.speed;
  } else if (rightPressed && player.x + player.width < canvas.width) {
    player.x += player.speed;
  }

  // 총알 발사
  if (spacePressed && canFireBullet()) {
    const newBullet = {
      x: player.x + player.width / 2,
      y: player.y,
      width: bulletWidth,
      height: bulletHeight,
      color: bulletColor,
      speed: bulletSpeed
    };
    bullets.push(newBullet);
    lastBulletTime = Date.now();
 
 }

  // 다음 프레임 그리기
  requestAnimationFrame(draw);
}

// 총알 발사 간격 확인
function canFireBullet() {
  const currentTime = Date.now();
  const timeDiff = currentTime - lastBulletTime;
  const fireInterval = 3000; // 3초
  return timeDiff >= fireInterval;
}

// 게임 시작
draw();
```

위의 코드는 `canFireBullet` 함수를 추가하여 `space`를 누를 때마다 마지막 총알 발사 시간과 현재 시간을 비교하여 3초 이상 지난 경우에만 총알을 발사하도록 제한합니다.