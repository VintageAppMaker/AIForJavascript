// HTML 요소 생성
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");

// 스타일 설정
div1.style.color = "blue";
div2.style.color = "red";
div3.style.textAlign = "center";

// 내용 설정
div1.textContent = "1부터 10까지: ";
div2.textContent = "55";
div3.textContent = "55 + 100 = " + (55 + 100);

// 최상단에 추가
document.body.insertBefore(div1, document.body.firstChild);
document.body.insertBefore(div2, document.body.firstChild);
document.body.insertBefore(div3, document.body.firstChild);
