# JavaScript 알고리즘 10개

```
 😀 
javascript로 기본알고리즘 문제 10개만 보여줘
```

### 🤖 ChatGPT
아래에 JavaScript로 작성된 10개의 기본 알고리즘 문제를 보여드리겠습니다:

1. 두 수의 합 구하기:
```javascript
function getSum(a, b) {
  return a + b;
}
```

2. 배열 요소의 합 구하기:
```javascript
function getArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

3. 팩토리얼 계산하기:
```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

4. 문자열 뒤집기:
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

5. 소수 판별하기:
```javascript
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

6. 문자열에서 중복 문자 제거하기:
```javascript
function removeDuplicates(str) {
  let unique = '';
  for (let i = 0; i < str.length; i++) {
    if (unique.indexOf(str[i]) === -1) {
      unique += str[i];
    }
  }
  return unique;
}
```

7. 배열에서 최대값 찾기:
```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```

8. 문자열이 회문인지 확인하기:
```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
```

9. 배열 정렬하기:
```javascript
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
```

10. 배열에서 중복 요소 제거하기:
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

이 문제들은 JavaScript를 사용하여 기본적인 알고리즘을 연습하는 데 도움이 될 수 있습니다.

```
😀 두 수의 합을 각기 다른 식으로 구현한 함수 3개만 보여주세요
```
### 🤖 ChatGPT
아래는 두 수의 합을 각기 다른 방식으로 구현한 JavaScript 함수 예시입니다:

1. 두 수의 합을 `+` 연산자를 사용하여 구하기:
```javascript
function getSum(a, b) {
  return a + b;
}
```

2. 두 수의 합을 `reduce()` 메서드를 사용하여 구하기:
```javascript
function getSum(a, b) {
  return [a, b].reduce((acc, curr) => acc + curr, 0);
}
```

3. 두 수의 합을 `Math.add()` 함수를 사용하여 구하기:
```javascript
function getSum(a, b) {
  return Math.add(a, b);
}
```

위의 함수들은 각각 다른 방식으로 두 수의 합을 계산합니다. 첫 번째 함수는 단순히 `+` 연산자를 사용하여 두 수를 더합니다. 두 번째 함수는 배열에 두 수를 담고 `reduce()` 메서드를 사용하여 배열 요소의 합을 구합니다. 세 번째 함수는 `Math.add()` 함수를 사용하여 두 수를 더합니다.

이러한 방식들을 사용하여 두 수의 합을 계산할 수 있습니다.

```
😀 기초적인 배열을 추가, 삭제, 변환 하는 예제를 보여주세요
```
### 🤖 ChatGPT
아래에는 JavaScript에서 배열을 추가, 삭제 및 변환하는 기본적인 예제를 보여드리겠습니다:

1. 배열에 요소 추가하기:
```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits); // 출력: ['apple', 'banana', 'orange', 'grape']
```

2. 배열에서 요소 삭제하기:
```javascript
const numbers = [1, 2, 3, 4, 5];
const removedNumber = numbers.pop();
console.log(numbers); // 출력: [1, 2, 3, 4]
console.log(removedNumber); // 출력: 5
```

3. 배열 요소 변환하기:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // 출력: [2, 4, 6, 8, 10]
```

위의 예제에서, 첫 번째 예제는 `push()` 메서드를 사용하여 배열에 새로운 요소를 추가합니다. `fruits` 배열에 'grape'라는 요소가 추가됩니다.

두 번째 예제는 `pop()` 메서드를 사용하여 배열에서 마지막 요소를 제거하고 제거된 요소를 반환합니다. `numbers` 배열에서 5가 제거되고, 제거된 값인 5가 `removedNumber` 변수에 저장됩니다.

세 번째 예제는 `map()` 메서드를 사용하여 배열의 각 요소를 변환합니다. `numbers` 배열의 각 요소를 2배로 변환하여 `doubledNumbers` 배열에 저장합니다.

이러한 방식을 사용하여 JavaScript에서 배열을 추가, 삭제 및 변환할 수 있습니다.