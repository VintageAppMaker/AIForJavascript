const puppeteer = require('puppeteer');

(async () => {
  // bugfix  
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://www.google.com/search?q=%ED%95%B8%EB%93%9C%ED%8F%B0&oq=%ED%95%B8%EB%93%9C%ED%8F%B0&aqs=chrome..69i57j69i61j69i65j69i61.363616722j0j15&sourceid=chrome&ie=UTF-8');
  
  // 요소를 추출하고 텍스트를 가져옴
  // 성공하지 못할 것임!
  const spanText = await page.$eval("//*[@id='tads']/div[2]/div/div/div/div[1]/a/div[2]/span[1]/span[2]/span[1]/div/span", element => element.textContent);
  
  // 추출한 데이터 출력
  console.log('Span Text:', spanText);

  await browser.close();
})();