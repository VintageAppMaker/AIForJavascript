// HTML 요소 생성
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");

// 스타일 설정
div1.style.color = "blue";
div2.style.color = "red";
div3.style.textAlign = "center";

// 1부터 10까지의 값을 1줄로 출력
var numbers = "";
for (var i = 1; i <= 10; i++) {
  numbers += i + " ";
}
div1.textContent = numbers;

// 빨간색으로 55 출력
div2.textContent = "55";

// 빨간색 숫자에 100을 더한 결과 출력
var result = parseInt(div2.textContent) + 100;
div3.textContent = result;

// 요소를 body에 추가
document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);
