const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

// 데이터 추가
const cellA1 = worksheet.getCell('A1');
cellA1.value = '이름';
cellA1.font = { size: 30 }; // A1 셀의 글꼴 크기 설정

const cellB1 = worksheet.getCell('B1');
cellB1.value = '나이';
cellB1.font = { size: 30 }; // B1 셀의 글꼴 크기 설정

worksheet.getCell('A2').value = 'John';
worksheet.getCell('B2').value = 30;
worksheet.getCell('A3').value = 'Jane';
worksheet.getCell('B3').value = 25;

// Excel 파일 저장
workbook.xlsx.writeFile('example.xlsx')
  .then(function() {
    console.log('Excel 파일이 생성되었습니다!');
  })
  .catch(function(error) {
    console.log('Excel 파일 생성 중 오류가 발생했습니다:', error);
  });