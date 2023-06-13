const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
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