const pptxgen = require('pptxgenjs');

// 프레젠테이션 생성
const pptx = new pptxgen();

// 제목 슬라이드 추가
const slide = pptx.addSlide();

// 제목 추가
slide.addText('안녕하세요!', { x: 1, y: 1, font_size: 18, color: '363636' });

// 저장
pptx.writeFile('example.pptx', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('프레젠테이션이 생성되었습니다!');
  }
});