const robot = require('robotjs');
const { exec } = require('child_process');

function typeAndSave() {
  // Notepad 실행
  exec('notepad');
  // 1초 대기
  robot.setKeyboardDelay(1000);
  // "안녕" 타이핑
  robot.typeString("hello, world");h
  // "Ctrl + S" 단축키 입력
  robot.keyTap('s', ['control']);
  // 파일 이름 입력
  robot.typeString("readme.txt");
  // "Enter" 입력
  robot.keyTap('enter');
  // Notepad 종료
  robot.keyTap('f4', ['alt']);
}

typeAndSave();