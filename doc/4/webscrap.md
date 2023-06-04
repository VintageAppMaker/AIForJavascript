# Node.js 웹 스크래핑 예제

```
😀 node.js로 웹스크랩핑 하는 예제를 보여주세요 
```
ChatGPT
다음은 Node.js를 사용하여 웹 스크래핑을 하는 간단한 예제입니다. 이 예제에서는 `axios`와 `cheerio` 라이브러리를 사용하여 웹 페이지에서 데이터를 추출합니다.

먼저, `axios`와 `cheerio`를 설치해야 합니다. 프로젝트 폴더에서 다음 명령을 실행하여 필요한 패키지를 설치합니다.

```
npm install axios cheerio
```

그런 다음, 아래의 코드를 `scraper.js` 파일에 작성합니다.

```javascript
const axios = require('axios');
const cheerio = require('cheerio');

// 스크래핑할 웹 페이지의 URL
const url = 'https://example.com';

// Axios를 사용하여 HTML을 가져옴
axios.get(url)
  .then(response => {
    if (response.status === 200) {
      // HTML에서 데이터 추출
      const html = response.data;
      const $ = cheerio.load(html);

      // 원하는 데이터를 선택하고 추출
      const title = $('h1').text();
      const description = $('meta[name="description"]').attr('content');

      // 추출한 데이터 출력
      console.log('Title:', title);
      console.log('Description:', description);
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });
```

위의 코드에서 `https://example.com` 부분에 스크래핑할 웹 페이지의 URL을 지정하면 됩니다. 코드는 해당 URL로 GET 요청을 보내고, 응답으로 받은 HTML을 `cheerio`를 사용하여 파싱합니다. 그런 다음, `cheerio`를 사용하여 필요한 데이터를 선택하고 추출합니다. 이 예제에서는 제목과 메타 태그에서의 설명을 추출하고 콘솔에 출력합니다.

스크래핑할 웹 페이지의 구조와 필요한 데이터에 따라 코드를 조정해야 할 수 있습니다. `cheerio`는 jQuery와 유사한 문법을 사용하여 HTML을 파싱하므로, jQuery 문법에 익숙하다면 쉽게 작업할 수 있을 것입니다.

```
😀 
https://www.google.com/search?q=%ED%95%B8%EB%93%9C%ED%8F%B0&oq=%ED%95%B8%EB%93%9C%ED%8F%B0&aqs=chrome..69i57j69i61j69i65j69i61.363616722j0j15&sourceid=chrome&ie=UTF-8
를 가져와서  
span.OSrXXb를 화면에 출력해주세요
```
### 🤖 ChatGPT
아래의 예제는 `axios`와 `cheerio`를 사용하여 Google 검색 결과 페이지에서 `span.OSrXXb` 요소를 추출하여 화면에 출력하는 코드입니다.

```javascript
const axios = require('axios');
const cheerio = require('cheerio');

// 스크래핑할 웹 페이지의 URL
const url = 'https://www.google.com/search?q=%ED%95%B8%EB%93%9C%ED%8F%B0&oq=%ED%95%B8%EB%93%9C%ED%8F%B0&aqs=chrome..69i57j69i61j69i65j69i61.363616722j0j15&sourceid=chrome&ie=UTF-8';

// Axios를 사용하여 HTML을 가져옴
axios.get(url)
  .then(response => {
    if (response.status === 200) {
      // HTML에서 데이터 추출
      const html = response.data;
      const $ = cheerio.load(html);

      // 원하는 데이터를 선택하고 추출
      const spanText = $('span.OSrXXb').text();

      // 추출한 데이터 출력
      console.log('Span Text:', spanText);
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });
```

위의 코드를 실행하면, `https://www.google.com/search?q=%ED%95%B8%EB%93%9C%ED%8F%B0&oq=%ED%95%B8%EB%93%9C%ED%8F%B0&aqs=chrome..69i57j69i61j69i65j69i61.363616722j0j15&sourceid=chrome&ie=UTF-8` URL에서 `span.OSrXXb` 요소의 텍스트를 추출하고 콘솔에 출력합니다.

주의: Google 검색 결과 페이지는 동적으로 로드되는 경우가 많으며, 이 코드는 정적인 HTML 페이지에서만 작동합니다. 동적으로 로드되는 페이지의 데이터를 스크래핑하려면 Puppeteer와 같은 도구를 사용하여 브라우저를 제어하는 방법을 고려해야 할 수 있습니다.
```
😀
위의 소스를  puppeteer로 
xpath로 "//[@id="tads"]/div[2]/div/div/div/div[1]/a/div[2]/span[1]/span[2]/span[1]/div/span"를 가져오도록 해주세요
```
ChatGPT
아래의 예제는 Puppeteer를 사용하여 Google 검색 결과 페이지에서 주어진 XPath 식인 `"//*[@id='tads']/div[2]/div/div/div/div[1]/a/div[2]/span[1]/span[2]/span[1]/div/span"`을 이용하여 요소를 추출하는 코드입니다.

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/search?q=%ED%95%B8%EB%93%9C%ED%8F%B0&oq=%ED%95%B8%EB%93%9C%ED%8F%B0&aqs=chrome..69i57j69i61j69i65j69i61.363616722j0j15&sourceid=chrome&ie=UTF-8');
  
  // 요소를 추출하고 텍스트를 가져옴
  const spanText = await page.$eval("//*[@id='tads']/div[2]/div/div/div/div[1]/a/div[2]/span[1]/span[2]/span[1]/div/span", element => element.textContent);
  
  // 추출한 데이터 출력
  console.log('Span Text:', spanText);

  await browser.close();
})();
```

위의 코드를 실행하면, Puppeteer를 사용하여 Google 검색 결과 페이지를 열고 주어진 XPath 식을 사용하여 요소의 텍스트를 추출하고 콘솔에 출력합니다.

XPath 식을 사용하여 요소를 선택할 때, 페이지의 HTML 구조에 따라 XPath 식을 조정해야 할 수 있습니다. 필요한 경우 XPath 식을 변경하여 원하는 요소를 선택하도록 수정할 수 있습니다.
```
😀
puppeteer를 이용해서 
https://www.google.com/search?q=%ED%95%B8%EB%93%9C%ED%8F%B0&oq=%ED%95%B8%EB%93%9C%ED%8F%B0&aqs=chrome..69i57j69i61j69i65j69i61.363616722j0j15&sourceid=chrome&ie=UTF-8
를 가져와서  
.OSrXXb  내용을 리스트로 보여주세요
```
### 🤖 ChatGPT
아래의 예제는 Puppeteer를 사용하여 Google 검색 결과 페이지에서 `.OSrXXb` 클래스를 가진 요소들의 내용을 리스트로 추출하는 코드입니다.

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/search?q=%ED%95%B8%EB%93%9C%ED%8F%B0&oq=%ED%95%B8%EB%93%9C%ED%8F%B0&aqs=chrome..69i57j69i61j69i65j69i61.363616722j0j15&sourceid=chrome&ie=UTF-8');
  
  // 요소들을 추출하고 내용을 가져옴
  const elements = await page.$$('.OSrXXb');
  const contents = await Promise.all(elements.map(element => element.textContent));

  // 추출한 데이터 출력
  console.log('Contents:', contents);

  await browser.close();
})();
```

위의 코드를 실행하면, Puppeteer를 사용하여 Google 검색 결과 페이지를 열고 `.OSrXXb` 클래스를 가진 요소들의 내용을 리스트로 추출하고 콘솔에 출력합니다.

`.OSrXXb` 클래스를 가진 요소들을 선택하기 위해 `page.$$` 함수를 사용하고, `element.textContent`를 사용하여 요소의 내용을 추출합니다. 추출한 내용은 `contents` 변수에 저장되고, 이를 리스트로 출력합니다.

필요에 따라 XPath 식이 아닌 클래스 선택자를 사용하여 요소를 선택하는 것도 가능합니다. 위의 코드는 `.OSrXXb` 클래스를 가진 요소들을 선택하기 위해 `page.$$` 함수를 사용한 예제입니다.
```
😀 element.textContent가 undefined입니다. 다른 방법을 알려주세요
```
### 🤖 ChatGPT
죄송합니다. 문제가 발생한 것 같습니다. Puppeteer에서는 `.evaluate()` 메서드를 사용하여 페이지 컨텍스트에서 JavaScript 코드를 실행하고 결과를 가져올 수 있습니다. 아래의 코드에서는 이 방법을 사용하여 `.OSrXXb` 클래스를 가진 요소들의 내용을 리스트로 추출합니다.

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/search?q=%ED%95%B8%EB%93%9C%ED%8F%B0&oq=%ED%95%B8%EB%93%9C%ED%8F%B0&aqs=chrome..69i57j69i61j69i65j69i61.363616722j0j15&sourceid=chrome&ie=UTF-8');

  // 요소들을 추출하고 내용을 가져옴
  const contents = await page.evaluate(() => {
    const elements = document.querySelectorAll('.OSrXXb');
    return Array.from(elements).map(element => element.textContent);
  });

  // 추출한 데이터 출력
  console.log('Contents:', contents);

  await browser.close();
})();
```

위의 코드를 실행하면, Puppeteer를 사용하여 Google 검색 결과 페이지를 열고 `.OSrXXb` 클래스를 가진 요소들의 내용을 리스트로 추출하고 콘솔에 출력합니다.

`page.evaluate()` 메서드를 사용하여 페이지 컨텍스트에서 JavaScript 코드를 실행하고, `document.querySelectorAll()`를 사용하여 `.OSrXXb` 클래스를 가진 요소들을 선택합니다. 그리고 `Array.from()` 및 `map()`을 사용하여 요소들의 내용을 추출하여 리스트로 반환합니다.

이렇게 하면 `.textContent`가 `undefined`로 나오지 않고, 요소들의 내용을 올바르게 추출할 수 있을 것입니다.