const robot = require('robotjs');
const { exec } = require('child_process');

function searchGoogle(searchTerm) {
  // 새 탭 열기
  robot.keyTap('t', ['command']);
  // 구글 검색 페이지로 이동
  exec('open https://www.google.com');
  // 검색어 입력
  robot.typeString(searchTerm);
  robot.keyTap('enter');
}

searchGoogle('node.js RPA');