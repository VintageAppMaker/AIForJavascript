# Pseudo Code 예제
```
😀 pseudo code의 예제를 알려주세요
```
### 🤖 ChatGPT
물론입니다! 다음은 간단한 덧셈을 수행하는 예제의 유사 코드(pseudo code)입니다:

```
// 두 수를 더하는 함수
function addNumbers(num1, num2):
    sum = num1 + num2
    return sum

// 메인 프로그램
input1 = 사용자로부터 숫자 입력 받기
input2 = 사용자로부터 숫자 입력 받기

result = addNumbers(input1, input2)

출력 result
```

위의 예제에서는 `addNumbers`라는 함수를 정의하여 두 수를 더하고, `input1`과 `input2`는 사용자로부터 입력을 받은 후 `addNumbers` 함수를 호출하여 결과를 `result`에 저장하고 출력합니다.

유사 코드는 실제 프로그래밍 언어가 아니기 때문에 문법적인 규칙이나 세부 구현은 제외됩니다. 그러나 알고리즘의 개요와 로직을 표현하는 데 유용하게 사용될 수 있습니다.

```
😀 
javascript로 다음 코드를 완성시켜주세요
// 두 수를 더하는 함수
function addNumbers(num1, num2):
    sum = num1 + num2
    return sum

// 메인 프로그램
input1 = 사용자로부터 숫자 입력 받기
input2 = 사용자로부터 숫자 입력 받기

result = addNumbers(input1, input2)

출력 result
```

### 🤖 ChatGPT
다음은 주어진 유사 코드를 JavaScript로 완성시킨 예제입니다:

```javascript
// 두 수를 더하는 함수
function addNumbers(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

// 메인 프로그램
var input1 = prompt("첫 번째 숫자를 입력하세요."); // 사용자로부터 숫자 입력 받기
var input2 = prompt("두 번째 숫자를 입력하세요."); // 사용자로부터 숫자 입력 받기

var result = addNumbers(Number(input1), Number(input2));

console.log(result); // 결과 출력
```

위의 코드에서 `addNumbers` 함수는 두 개의 숫자를 더하여 합을 반환합니다. `prompt` 함수를 사용하여 사용자로부터 숫자를 입력받고, 입력된 값은 문자열로 반환되기 때문에 `Number` 함수를 사용하여 숫자로 변환합니다.

마지막으로 `console.log` 함수를 사용하여 결과를 출력합니다.

```
😀 
함수를 정의한다. 
    이름은 add이다. 
    입력값은 첫번째 숫자, 두번째 숫자이다.
    첫번째 숫자와 두번째 숫자를 합친다. 
    결과값을 리턴한다.. 

시작함수를 정의한다. 
    입력을 받고 변수 a에 저장한다. 
    입력을 받고 변수 b에 저장한다. 
    add(a, b)를 실행하고 그 결과값을 출력한다. 

시작함수를 시작한다.
```
### 🤖 ChatGPT
다음은 주어진 요구 사항에 맞게 JavaScript로 코드를 작성한 예제입니다:

```javascript
// 함수 정의: 두 숫자를 합하는 함수
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

// 시작 함수 정의
function start() {
    var a = prompt("첫 번째 숫자를 입력하세요."); // 입력을 받고 변수 a에 저장
    var b = prompt("두 번째 숫자를 입력하세요."); // 입력을 받고 변수 b에 저장

    var result = add(Number(a), Number(b)); // add 함수 실행하여 결과값을 변수 result에 저장
    console.log(result); // 결과값 출력
}

// 시작 함수 실행
start();
```

위의 코드에서 `add` 함수는 두 개의 숫자를 합하여 결과값을 반환합니다. `start` 함수는 `prompt` 함수를 사용하여 사용자로부터 숫자를 입력받고, 입력된 값은 문자열로 반환되기 때문에 `Number` 함수를 사용하여 숫자로 변환합니다.

마지막으로 `start` 함수를 실행하여 프로그램을 시작하고 결과값을 출력합니다.

```
😀 
함수를 정의한다. 
    이름은 check이다. 
    입력값은 첫번째 문자, 두번째 숫자이다.
    첫번째 문자는 사용자이름이라는 변수에 저장한다.
    두번째 숫자는 나이라는 변수에 저장한다.
    나이가 20이하라면 
        "미성년자입니다."라고 출력하고 거짓을 리턴한다.
    이름이 영어라면 
        "외국인입니다"를 출력하고  거짓을 리턴한다. 
    참을 리턴한다.

시작함수를 정의한다. 
    check() 함수를 실행하며 첫번째 파라메터와 두번째 파라메터를 입력받는다. 
   결과값을 받는다. 
   결과값이 거짓이면 
       "사용할 수 없습니다"    
    참이면 
        "사용할 수 있습니다" 
    를 출력한다. 

```    
### 🤖 ChatGPT
다음은 주어진 요구 사항에 맞게 JavaScript로 코드를 작성한 예제입니다:

```javascript
// 함수 정의: 이름과 나이를 확인하는 함수
function check(name, age) {
    var 사용자이름 = name; // 첫 번째 문자는 사용자이름 변수에 저장
    var 나이 = age; // 두 번째 숫자는 나이 변수에 저장

    if (나이 <= 20) { // 나이가 20 이하인 경우
        console.log("미성년자입니다.");
        return false;
    }

    if (/^[a-zA-Z]+$/.test(사용자이름)) { // 이름이 영어인 경우 (정규식을 사용하여 영어 확인)
        console.log("외국인입니다.");
        return false;
    }

    return true; // 참을 리턴
}

// 시작 함수 정의
function start() {
    var 파라메터1 = prompt("사용자 이름을 입력하세요."); // 첫 번째 파라메터 입력받기
    var 파라메터2 = prompt("나이를 입력하세요."); // 두 번째 파라메터 입력받기

    var 결과값 = check(파라메터1, Number(파라메터2)); // check 함수 실행하여 결과값을 변수에 저장
    if (결과값 === false) { // 결과값이 거짓인 경우
        console.log("사용할 수 없습니다.");
    } else { // 결과값이 참인 경우
        console.log("사용할 수 있습니다.");
    }
}

// 시작 함수 실행
start();
```

위의 코드에서 `check` 함수는 첫 번째 문자와 두 번째 숫자를 확인하고, 조건에 따라 "미성년자입니다." 또는 "외국인입니다."를 출력한 후 참 또는 거짓을 반환합니다.

`start` 함수는 `prompt` 함수를 사용하여 사용자로부터 첫 번째 파라메터와 두 번째 파라메터를 입력받고, `check` 함수를 실행하여 결과값을 받아옵니다. 결과값이 거짓인 경우 "사용할 수 없습니다."를 출력하고, 참인 경우 "사용할 수 있습니다."를 출력합니다.