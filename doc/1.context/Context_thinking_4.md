# Context형식으로 사고하기 #4

```jsx
❓
함수를 정의한다.
1. 이름을 "add"라고 정의한다.
2. 첫번째 입력값은 숫자이다. 두번째 입력값은 숫자이다. 
3. add 함수에서 첫번째 입력값과 두번째 입력값을 + 한다.
4. 위의 결과값을 리턴한다. 

시작한다. 
1. add 함수를 시작하며 첫번째 값을 3, 두번째 값을 5로 한다. 
2.실행된 결과값을 받는다.

위의 내용을 의사코드(pseudocode)로 보여주고 결과값을 출력하라.
```

### ChatGPT

```javascript

1. 함수 add(num1, num2) 정의
2. 결과값 = num1 + num2
3. 결과값을 리턴

시작:
1. 결과 = add(3, 5)  # add 함수에 3과 5를 입력
2. 결과값 출력

```

결과값: 8



```jsx
❓
1. 함수 add(num1, num2) 정의
2. 결과값 = num1 + num2
3. 결과값을 리턴

시작:
1. 결과 = add(3, 5)  # add 함수에 3과 5를 입력
2. 결과값 출력
를 자바스크립트로 만들어주세요
```

### ChatGPT

Sure! Here's the JavaScript code for the given pseudocode:

```javascript
// 함수 add(num1, num2) 정의
function add(num1, num2) {
  // 결과값 = num1 + num2
  var result = num1 + num2;
  // 결과값을 리턴
  return result;
}

// 시작
// add 함수에 3과 5를 입력하여 결과값을 받음
var result = add(3, 5);
// 결과값 출력
console.log(result);

```

When you run this code, it will output **`8`** to the console.