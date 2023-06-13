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