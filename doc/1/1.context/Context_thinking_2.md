# Context형식으로 사고하기 #2

Status: Not started

```jsx
javascript에서 
1. 파란색으로 1부터 10까지 최상단의 위치에 1줄로 출력합니다.
2. 그 다음 줄에 빨간색으로 55라는 숫자를 출력합니다.
3. 빨간색의 숫자값과 +100을 한 결과를 다음줄 중앙에 표기합니다.
소스코드를 만들어주세요
```

### ChatGPT

다음은 JavaScript로 작성된 요구사항에 따른 소스 코드 예시입니다:

```javascript
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

```

이 코드를 HTML 파일의 **`<script>`** 태그 내에 포함시키거나, JavaScript 파일로 저장하여 웹 페이지에서 실행할 수 있습니다. 위의 코드는 파란색으로 "1부터 10까지: "를 최상단에 출력한 뒤, 그 다음 줄에 빨간색으로 숫자 "55"를 출력하고, 마지막으로 빨간색 숫자에 100을 더한 결과를 중앙에 출력하는 기능을 구현합니다.


```jsx
javascript에서 
1. 첫줄에 파란색으로 1부터 10까지의 값을  1줄로 출력합니다.
2. 그 다음 줄에 빨간색으로 55라는 숫자를 출력합니다.
3. 그 다음 줄에 빨간색의 숫자값과 +100을 한 결과를 다음줄 중앙에 표기합니다.
소스코드를 만들어주세요
```

### ChatGPT

다음은 변경된 요구사항에 따른 JavaScript 소스 코드 예시입니다:

```javascript

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

```

이 코드는 첫 번째 줄에 파란색으로 "1부터 10까지"의 값을 1줄로 출력합니다. 두 번째 줄에는 빨간색으로 "55"를 출력하고, 세 번째 줄에는 빨간색 숫자에 100을 더한 결과를 출력합니다. 각 출력 결과는 개별적으로 **`<div>`** 요소로 생성되며, 최종적으로 body에 추가됩니다.