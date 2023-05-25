
function sum(values) {
  // 1. 성적 리스트 생성 및 초기화
  var 성적리스트 = Array(values.length).fill(0);

  // 2. 합계 및 예외 카운트 변수 초기화
  var 합계 = 0;
  var 예외 = 0;

  // 3. 값들을 더하면서 예외 체크
  for (var i = 0; i < values.length; i++) {
    var value = values[i];

    if (value <= 50) {
      예외++; // 50점 이하의 예외 카운트
    } else {
      합계 += value; // 50점 초과일 경우 합계에 더함
    }
  }

  // 4. 합계와 입력받은 값의 갯수 출력
  console.log("합계:", 합계);
  console.log("입력받은 값의 갯수:", values.length);

  // 5. 예외 값 출력
  console.log("예외:", 예외);

  // 합계 반환
  return 합계;
}

var 입력값들 = [85, 92, 76, 60, 45, 98, 79, 68];
var 결과 = sum(입력값들);

console.log(결과);





