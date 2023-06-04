# Node.js RPA 예제

```
😀 node.js rpa 예제를 만들어줘
```

### 🤖 ChatGPT
RPA(로봇 공정 자동화)는 자동화된 봇이 인간의 작업을 모방하여 작업을 자동화하는 것을 말합니다. Node.js는 JavaScript 기반의 런타임 환경으로, 비동기식 이벤트 기반으로 작동합니다. Node.js는 자바스크립트로 작성되어 있어 RPA를 작성하기에 적합합니다. 

아래는 Node.js를 사용하여 웹 사이트에서 데이터를 추출하고 저장하는 예제입니다.

```javascript
const puppeteer = require('puppeteer');

async function scrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  
  // 웹 페이지에서 데이터 추출
  const title = await page.title();
  const body = await page.$eval('body', element => element.textContent);

  // 데이터 저장
  const fs = require('fs');
  fs.writeFileSync('output.txt', `${title}\n\n${body}`);
  
  await browser.close();
}

scrape();
```

위의 코드는 Puppeteer 라이브러리를 사용하여 웹 페이지에서 데이터를 추출하고 파일로 저장하는 예제입니다. Puppeteer는 Chrome을 제어하기 위한 API를 제공합니다. 

위의 코드에서는 `scrape` 함수가 Puppeteer를 사용하여 웹 페이지에 액세스하고 데이터를 추출합니다. `fs` 모듈을 사용하여 데이터를 파일에 저장합니다. 

이 예제를 사용하여 Node.js로 RPA를 구현할 수 있습니다. Puppeteer를 사용하여 로그인 페이지에 액세스하고 데이터를 입력하고 저장할 수 있습니다. 이 예제를 확장하여 자동화된 작업을 수행할 수 있습니다.

```
😀 robot.js 예제를 활용한 예제를 만들어줘
```

### 🤖 ChatGPT
`robot.js`는 Node.js에서 마우스 및 키보드 이벤트를 시뮬레이트하는 라이브러리입니다. 아래는 `robot.js`를 사용하여 특정 키 조합을 눌러 웹 브라우저에서 새 탭을 열고 구글 검색을 수행하는 예제입니다.

```javascript
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
```

위의 코드에서 `searchGoogle` 함수는 `robot.js`를 사용하여 새 탭을 열고 구글 검색 페이지로 이동한 다음, 검색어를 입력하고 검색을 수행합니다. `exec` 함수는 Node.js에서 셸 명령을 실행합니다.

이 예제를 확장하여 더 복잡한 작업을 수행할 수 있습니다. 예를 들어, 웹 사이트에서 데이터를 추출하고 데이터베이스에 저장하는 자동화된 작업을 만들 수 있습니다. 이를 위해서는 Puppeteer와 함께 `robot.js`를 사용하여 웹 페이지를 탐색하고 데이터를 추출하고 저장할 수 있습니다.

```
😀 
robot.js를 활용해서
1. notepad를 열고
2. 안녕을 타이핑하고
3. readme.txt로 저장
하는 예제를 만들어줘
```

### 🤖 ChatGPT
아래는 `robot.js`를 사용하여 Notepad에서 "안녕"을 타이핑하고 "readme.txt" 파일로 저장하는 예제입니다.

```javascript
const robot = require('robotjs');
const { exec } = require('child_process');

function typeAndSave() {
  // Notepad 실행
  exec('notepad');
  // 1초 대기
  robot.setKeyboardDelay(1000);
  // "안녕" 타이핑
  robot.typeString("안녕");
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
```

위의 코드에서 `typeAndSave` 함수는 `robot.js`를 사용하여 Notepad를 열고 "안녕"을 타이핑한 다음 "Ctrl + S" 단축키를 눌러 "readme.txt" 파일로 저장합니다. `setKeyboardDelay` 함수는 각 키 이벤트 사이의 지연 시간을 설정합니다.

이 예제를 확장하여 더 복잡한 작업을 수행할 수 있습니다. 예를 들어, Notepad에서 데이터를 추출하고 다른 프로그램으로 전송하는 작업을 만들 수 있습니다. 이를 위해서는 `robot.js`와 함께 Windows API 또는 PowerShell 등의 도구를 사용하여 다른 프로그램과 상호 작용해야 합니다.

```
😀 robot.js로 그림판에 둥근원을 그리고 a.png로 저장하는 예제를 만들어줘
```

### 🤖 ChatGPT
아래는 `robot.js`를 사용하여 그림판에서 둥근원을 그리고 "a.png" 파일로 저장하는 예제입니다.

```javascript
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
```

위의 코드에서 `drawCircleAndSave` 함수는 `robot.js`를 사용하여 그림판을 열고 둥근원을 그린 다음 "Ctrl + S" 단축키를 눌러 "a.png" 파일로 저장합니다. `setMouseDelay` 함수는 마우스 이벤트 사이의 지연 시간을 설정합니다.

이 예제를 확장하여 더 복잡한 그림을 그리고 저장할 수 있습니다. 예를 들어, 다양한 색상과 선 두께를 사용하여 복잡한 도형을 그리거나, 그리기 도구 대신 펜 또는 붓 도구를 사용하여 그림을 그릴 수 있습니다. 이를 위해서는 `robot.js`와 함께 Windows API 또는 PowerShell 등의 도구를 사용하여 그림판과 상호 작용해야 합니다.

```
😀 
robotjs에서
1. word를 열고 
2. 안녕하세요 입력 후
3. test.doc
저장하는 예제를 만들어줘
```

### 🤖 ChatGPT
아래는 `robotjs`를 사용하여 Word에서 "안녕하세요"를 입력하고 "test.doc" 파일로 저장하는 예제입니다.

```javascript
const robot = require('robotjs');
const { exec } = require('child_process');

function typeAndSave() {
  // Word 실행
  exec('winword');
  // 1초 대기
  robot.setKeyboardDelay(1000);
  // "안녕하세요" 타이핑
  robot.typeString("안녕하세요");
  // "Ctrl + S" 단축키 입력
  robot.keyTap('s', ['control']);
  // 파일 이름 입력
  robot.typeString("test.doc");
  // "Enter" 입력
  robot.keyTap('enter');
}

typeAndSave();
```

위의 코드에서 `typeAndSave` 함수는 `robot.js`를 사용하여 Word를 열고 "안녕하세요"를 타이핑한 다음 "Ctrl + S" 단축키를 눌러 "test.doc" 파일로 저장합니다. `setKeyboardDelay` 함수는 각 키 이벤트 사이의 지연 시간을 설정합니다.

이 예제를 확장하여 더 복잡한 작업을 수행할 수 있습니다. 예를 들어, Word에서 문서를 열고 수정한 다음 다른 프로그램으로 내보내는 작업을 만들 수 있습니다. 이를 위해서는 `robot.js`와 함께 Windows API 또는 PowerShell 등의 도구를 사용하여 Word와 상호 작용해야 합니다.