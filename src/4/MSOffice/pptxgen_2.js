const pptxgen = require('pptxgenjs');

// 프레젠테이션 생성
const pptx = new pptxgen();

// 파일명과 6개의 슬라이드 생성
const fileName = 'test.pptx';
for (let i = 0; i < 6; i++) {
  const slide = pptx.addSlide();
  if (i === 0) {
    // 첫번째 슬라이드: "안녕하세요" 중앙 정렬, 48pt
    slide.addText('안녕하세요', { x: '50%', y: '50%', font_size: 48, align: 'center', valign: 'middle' });
  } else if (i === 1) {
    // 두번째 슬라이드: "알리는 글" 상단 정렬, 20pt, 좌측 정렬
    slide.addText('알리는 글', { x: 1, y: 1, font_size: 20 });
    // "테스트입니다" 30pt 아래에 추가
    slide.addText('테스트입니다', { x: 1, y: 30, font_size: 20 });
  }
  // 나머지 슬라이드는 빈 슬라이드로 생성됨
}

// 프레젠테이션 저장
pptx.writeFile(fileName, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`프레젠테이션이 "${fileName}" 파일로 생성되었습니다!`);
  }
});