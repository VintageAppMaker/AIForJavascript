# Context형식으로 사고하기 #6

```jsx
1. 함수 max(num1, num2) 정의
2. 결과값 = num1, num2에서 가장 큰 값
3. 결과값을 리턴

시작:
1. 결과 = max(3, 5)  # max 함수에 3과 5를 입력
2. 결과값 출력
위의 pseudocode에서 
max 함수가 num1, num2 대신 
연속되는 숫자열중 가장 큰 값을 반환하도록
수정해주세요
```

### ChatGPT

수정된 pseudocode는 다음과 같습니다:

1. 함수 max(numbers) 정의
2. 결과값 = numbers에서 가장 큰 값
3. 결과값을 리턴

시작:

1. 결과 = max([3, 5]) # max 함수에 [3, 5]를 입력
2. 결과값 출력

위의 수정된 pseudocode에서 max 함수는 numbers라는 리스트를 인자로 받고, 그 리스트 안에서 가장 큰 값을 찾아 반환하도록 변경되었습니다.

```jsx
❓ 위의 pseudocode 내용대로 javascript를 만들어주세요
```

ChatGPT

아래는 주어진 pseudocode를 기반으로 작성된 JavaScript 코드입니다:

```javascript
function max(numbers) {
  let maxVal = numbers[0]; // numbers 리스트의 첫 번째 값으로 초기화

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxVal) {
      maxVal = numbers[i]; // 현재 값이 최대값보다 크면 최대값 업데이트
    }
  }

  return maxVal;
}

// 시작
const result = max([3, 5]); // max 함수에 [3, 5]를 입력
console.log(result); // 결과값 출력

```

위의 코드는 **`max`** 함수를 정의하고, 해당 함수를 사용하여 [3, 5] 리스트에서 가장 큰 값을 찾아내고 출력하는 예시입니다. 코드를 실행하면 결과값 **`5`**가 출력됩니다.


```jsx
❓ 위의 javascript 소스에서 max([3, 5]) 대신 max([3, 5, 9, 8, 9, 9, 9, 10])의 결과값을 보여주세요
```

### ChatGPT

수정된 JavaScript 코드를 사용하여 **`max([3, 5, 9, 8, 9, 9, 9, 10])`**의 결과값을 계산하면 다음과 같습니다:

```javascript
function max(numbers) {
  let maxVal = numbers[0]; // numbers 리스트의 첫 번째 값으로 초기화

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxVal) {
      maxVal = numbers[i]; // 현재 값이 최대값보다 크면 최대값 업데이트
    }
  }

  return maxVal;
}

// 시작
const result = max([3, 5, 9, 8, 9, 9, 9, 10]); // max 함수에 [3, 5, 9, 8, 9, 9, 9, 10]를 입력
console.log(result); // 결과값 출력

```

위의 코드를 실행하면 결과값 **`10`**이 출력됩니다. 주어진 리스트 **`[3, 5, 9, 8, 9, 9, 9, 10]`**에서 가장 큰 값은 **`10`**입니다.