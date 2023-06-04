# Node.js 자동화 예제 (headless 브라우저)

```
😀 node.js의 puppeteer를 이용한 자동화 에제를 만들어줘
```
### 🤖 ChatGPT
물론이죠! 아래는 Puppeteer를 사용하여 웹 페이지를 자동화하는 간단한 예제입니다.

먼저, Puppeteer 패키지를 설치해야합니다. npm을 사용하여 설치할 수 있습니다.

```
npm install puppeteer
```

이제 Puppeteer를 사용하여 Google 홈페이지에서 검색어를 입력하고 결과를 캡처하는 예제를 만들어 보겠습니다.

```javascript
const puppeteer = require('puppeteer');

(async () => {
  // 브라우저를 시작합니다.
  const browser = await puppeteer.launch();

  // 새 페이지를 엽니다.
  const page = await browser.newPage();

  // Google 홈페이지로 이동합니다.
  await page.goto('https://www.google.com');

  // 검색어를 입력합니다.
  await page.type('input[name="q"]', 'Puppeteer');

  // 검색 버튼을 클릭합니다.
  await page.click('input[name="btnK"]');

  // 검색 결과를 기다립니다.
  await page.waitForSelector('#search');

  // 스크린샷을 찍습니다.
  await page.screenshot({ path: 'google.png' });

  // 브라우저를 종료합니다.
  await browser.close();
})();
```

위 코드는 Puppeteer를 사용하여 Google 홈페이지에서 "Puppeteer"를 검색하고 결과를 캡처합니다. 코드를 실행하면 현재 디렉토리에 "google.png"라는 파일이 생성됩니다.

이것은 Puppeteer를 사용하여 웹 페이지 자동화의 기본적인 예제입니다. 더 복잡한 작업을 수행하려면 Puppeteer API 문서를 참조하십시오.
```
😀 puppeteer로 구글트랜드 크롤링 하는 예제를 만들어주세요
```

### 🤖 ChatGPT
좋습니다! 아래는 Puppeteer를 사용하여 구글 트렌드를 크롤링하는 예제입니다.

먼저, Puppeteer 패키지를 설치해야합니다. npm을 사용하여 설치할 수 있습니다.

```
npm install puppeteer
```

다음으로, 구글 트렌드 웹 페이지를 엽니다. 구글 트렌드는 로그인이 필요하기 때문에 Puppeteer를 사용하여 로그인합니다. Puppeteer를 사용하여 웹 페이지에서 데이터를 추출하고 콘솔에 출력합니다.

```javascript
const puppeteer = require('puppeteer');

(async () => {
  // 브라우저를 시작합니다.
  const browser = await puppeteer.launch({ headless: false });

  // 새 페이지를 엽니다.
  const page = await browser.newPage();

  // 구글 트렌드에 로그인합니다.
  await page.goto('https://trends.google.com/trends/?geo=US');
  await page.waitForSelector('#signin-section > div > div > div > button');
  await page.click('#signin-section > div > div > div > button');
  await page.waitForSelector('#identifierId');
  await page.type('#identifierId', '이메일 주소를 입력하세요');
  await page.click('#identifierNext');
  await page.waitForSelector('input[name="password"]');
  await page.type('input[name="password"]', '비밀번호를 입력하세요');
  await page.click('#passwordNext');
  await page.waitForNavigation();

  // 검색어를 입력합니다.
  await page.type('#input-254', 'JavaScript');

  // 검색 버튼을 클릭합니다.
  await page.click('#exploreForm > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > button');

  // 검색 결과를 기다립니다.
  await page.waitForSelector('#trends-chart');

  // 데이터를 추출합니다.
  const result = await page.evaluate(() => {
    const data = [];
    const table = document.querySelector('#explore-table > div.widget-actions-items-container > div.widget-actions-item.chart-widget-container > div > div > div > div.widget-actions-item__chart-section > div > div > div > div > div > div > div > div > div.widget-actions-item__data-widget > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div >

```

```
😀 
puppeteer를 사용한다. 
1. 다음 주소로 이동한다.  https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%A2%85%EB%A1%9C%EA%B5%AC+%EC%B0%BD%EC%8B%A0%EB%8F%99/
2. 화면을 ok.png로 저장한다. 
3. 종료한다. 
```


### 🤖 ChatGPT
아래는 Puppeteer를 사용하여 구글 지도에서 작업을 수행하는 예제입니다.

```javascript
const puppeteer = require('puppeteer');

(async () => {
  // 브라우저를 시작합니다.
  const browser = await puppeteer.launch();

  // 새 페이지를 엽니다.
  const page = await browser.newPage();

  // 구글 지도 페이지로 이동합니다.
  await page.goto('https://www.google.co.kr/maps/place/서울특별시+종로구+창신동/');

  // 페이지 로딩을 기다립니다.
  await page.waitForNavigation();

  // 스크린샷을 찍고 파일로 저장합니다.
  await page.screenshot({ path: 'ok.png' });

  // 브라우저를 종료합니다.
  await browser.close();
})();
```

위의 코드를 실행하면 Puppeteer를 사용하여 구글 지도 페이지로 이동한 다음, 페이지를 스크린샷으로 저장하고 브라우저를 종료합니다. "ok.png"라는 파일이 생성됩니다.

이 예제를 실행하면 구글 지도 페이지의 스크린샷이 "ok.png" 파일로 저장됩니다.
```
1. https://www.google.co.kr/maps/@37.5651,126.98955,10z로 이동한다. 
2. ml-serachinputbox를 찾아서 그 안에 "서울시 종로구 청운동"을 입력한다. 
3. 검색을 시작한다. 
4. 결과를 result.png로 저장한다. 
```

### 🤖 ChatGPT
아래는 Puppeteer를 사용하여 구글 지도에서 작업을 수행하는 예제입니다.

```javascript
const puppeteer = require('puppeteer');

(async () => {
  // 브라우저를 시작합니다.
  const browser = await puppeteer.launch();

  // 새 페이지를 엽니다.
  const page = await browser.newPage();

  // 구글 지도 페이지로 이동합니다.
  await page.goto('https://www.google.co.kr/maps/@37.5651,126.98955,10z');

  // ml-searchinputbox 요소를 찾아 "서울시 종로구 청운동"을 입력합니다.
  await page.type('input[name="q"]', '서울시 종로구 청운동');

  // 검색 버튼을 클릭합니다.
  await page.click('button[jsaction="pane.searchbox.go"]');

  // 페이지 로딩을 기다립니다.
  await page.waitForNavigation();

  // 스크린샷을 찍고 파일로 저장합니다.
  await page.screenshot({ path: 'result.png' });

  // 브라우저를 종료합니다.
  await browser.close();
})();
```

위의 코드를 실행하면 Puppeteer를 사용하여 구글 지도 페이지로 이동한 다음, "서울시 종로구 청운동"을 검색하고 검색 결과 페이지의 스크린샷을 "result.png" 파일로 저장합니다.

이 예제를 실행하면 구글 지도 페이지에서 "서울시 종로구 청운동"을 검색한 결과를 "result.png" 파일로 저장합니다.

```
😀 
위의 소스에서 버그가 있습니다. 
1. button[id="searchbox-searchbutton"]으로 변경되어야 재대로 됩니다. 
2. launch시에 headless를 false로 해주세요
```

### 🤖 ChatGPT
죄송합니다. 오류를 수정하고 요청사항에 맞게 수정한 예제를 아래에 제시합니다.

```javascript
const puppeteer = require('puppeteer');

(async () => {
  // 브라우저를 시작합니다.
  const browser = await puppeteer.launch({ headless: false });

  // 새 페이지를 엽니다.
  const page = await browser.newPage();

  // 구글 지도 페이지로 이동합니다.
  await page.goto('https://www.google.co.kr/maps/@37.5651,126.98955,10z');

  // ml-searchinputbox 요소를 찾아 "서울시 종로구 청운동"을 입력합니다.
  await page.type('input[name="q"]', '서울시 종로구 청운동');

  // 검색 버튼을 클릭합니다.
  await page.click('button[id="searchbox-searchbutton"]');

  // 페이지 로딩을 기다립니다.
  await page.waitForNavigation();

  // 스크린샷을 찍고 파일로 저장합니다.
  await page.screenshot({ path: 'result.png' });

  // 브라우저를 종료합니다.
  await browser.close();
})();
```

위의 코드를 실행하면 Puppeteer를 사용하여 구글 지도 페이지로 이동한 다음, "서울시 종로구 청운동"을 검색하고 검색 결과 페이지의 스크린샷을 "result.png" 파일로 저장합니다. 또한, 브라우저는 화면에 표시됩니다.