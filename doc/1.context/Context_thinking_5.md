# Context형식으로 사고하기 #5


```html
❓
1. 함수 max(num1, num2) 정의
2. 결과값 = num1, num2에서 가장 큰 값
3. 결과값을 리턴

시작:
1. 결과 = max(3, 5)  # max 함수에 3과 5를 입력
2. 결과값 출력

위의 pseudocode의 결과값을 보여주세요
```
### ChatGPT

정의한 max 함수를 사용하여 3과 5 중에서 가장 큰 값을 구하는 pseudocode의 결과값은 다음과 같습니다:

시작:

1. 결과 = max(3, 5) # max 함수에 3과 5를 입력하면 5가 가장 큰 값이 됨
2. 결과값 출력

결과값: 5


```
❓
1. 함수 max(num1, num2) 정의
위의 pseudocode를 javascript로 소스코드 만들어주세요
```

### ChatGPT

아래는 주어진 pseudocode를 JavaScript로 변환한 소스 코드입니다:

```javascript
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// 시작
var 결과 = max(3, 5); // max 함수에 3과 5를 입력
console.log(결과); // 결과값 출력

```

위의 소스 코드를 실행하면 결과로 5가 출력될 것입니다.