const puppeteer = require('puppeteer');

async function scrape() {
  // bug 있음. 호출을 아래와 같이하면 안됨. launch에 파라메터를 넣어주어야 함.  
  //const browser = await puppeteer.launch({headless: false});
  const browser = await puppeteer.launch({headless: false});
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