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