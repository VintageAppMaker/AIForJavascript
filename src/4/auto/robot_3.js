const robot = require('robotjs');
const { exec } = require('child_process');

function drawCircleAndSave() {
  // 그림판 실행
  exec('mspaint');
  // 1초 대기
  robot.setMouseDelay(1000);
  // 그리기 도구 선택
  robot.moveMouse(115, 75);
  robot.mouseClick();
  // 원 도구 선택
  robot.moveMouse(175, 160);
  robot.mouseClick();
  // 그리기 시작점 선택
  robot.moveMouse(300, 300);
  robot.mouseToggle('down', 'left');
  // 그리기 종료점 선택
  robot.moveMouse(500, 300);
  robot.mouseToggle('up', 'left');
  // "Ctrl + S" 단축키 입력
  robot.keyTap('s', ['control']);
  // 파일 이름 입력
  robot.typeString("a.png");
  // "Enter" 입력
  robot.keyTap('enter');
  // 그림판 종료
  robot.keyTap('f4', ['alt']);
}

drawCircleAndSave();