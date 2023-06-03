# 계산기 HTML/JS 통합

```
😀
1. html 소스는 다음과 같다. 
<!-- HTML 코드 -->
<input type="text" id="result" readonly>
<br>
<button onclick="appendNumber(1)">1</button>
<button onclick="appendNumber(2)">2</button>
<button onclick="appendNumber(3)">3</button>
<button onclick="appendNumber('+')">+</button>
<br>
<button onclick="appendNumber(4)">4</button>
<button onclick="appendNumber(5)">5</button>
<button onclick="appendNumber(6)">6</button>
<button onclick="appendNumber('-')">-</button>
<br>
<button onclick="appendNumber(7)">7</button>
<button onclick="appendNumber(8)">8</button>
<button onclick="appendNumber(9)">9</button>
<button onclick="appendNumber('*')">*</button>
<br>
<button onclick="appendNumber(0)">0</button>
<button onclick="appendNumber('.')">.</button>
<button onclick="calculate()">=</button>
<button onclick="appendNumber('/')">/</button>
<br>
<button onclick="clearResult()">C</button>

2. 자바스크립트 소스는 다음과 같다. 
// HTML에서 숫자 버튼을 클릭할 때 호출되는 함수
function appendNumber(number) {
  document.getElementById("result").value += number;
}

// HTML에서 "=" 버튼을 클릭할 때 호출되는 함수
function calculate() {
  var expression = document.getElementById("result").value;
  var result = eval(expression); // eval 함수를 사용하여 수식을 계산합니다.
  document.getElementById("result").value = result;
}

// HTML에서 "C" 버튼을 클릭할 때 호출되는 함수
function clearResult() {
  document.getElementById("result").value = "";
}

html에 한 소스로 만들어줘
```

### 🤖 ChatGPT
당신이 원하는대로 HTML 소스를 하나로 합쳐드리겠습니다.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculator</title>
</head>
<body>
    <input type="text" id="result" readonly>
    <br>
    <button onclick="appendNumber(1)">1</button>
    <button onclick="appendNumber(2)">2</button>
    <button onclick="appendNumber(3)">3</button>
    <button onclick="appendNumber('+')">+</button>
    <br>
    <button onclick="appendNumber(4)">4</button>
    <button onclick="appendNumber(5)">5</button>
    <button onclick="appendNumber(6)">6</button>
    <button onclick="appendNumber('-')">-</button>
    <br>
    <button onclick="appendNumber(7)">7</button>
    <button onclick="appendNumber(8)">8</button>
    <button onclick="appendNumber(9)">9</button>
    <button onclick="appendNumber('*')">*</button>
    <br>
    <button onclick="appendNumber(0)">0</button>
    <button onclick="appendNumber('.')">.</button>
    <button onclick="calculate()">=</button>
    <button onclick="appendNumber('/')">/</button>
    <br>
    <button onclick="clearResult()">C</button>
    
    <script>
        function appendNumber(number) {
            document.getElementById("result").value += number;
        }

        function calculate() {
            var expression = document.getElementById("result").value;
            var result = eval(expression);
            document.getElementById("result").value = result;
        }

        function clearResult() {
            document.getElementById("result").value = "";
        }
    </script>
</body>
</html>
```

위의 코드를 사용하면 HTML과 JavaScript 소스가 한 파일에 통합되어 작동하는 계산기를 만들 수 있습니다. 해당 파일을 HTML 확장자로 저장한 뒤 웹 브라우저에서 열면 계산기를 사용할 수 있습니다.