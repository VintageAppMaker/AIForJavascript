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