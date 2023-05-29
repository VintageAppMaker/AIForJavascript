```
❓
1. 랜덤하게 50부터 1까지 범위 안에 있는 숫자를 생성합니다.
2. 그 값을 "추측값"으로 저장합니다. 
3. 카운트라는 변수에 10을 저장합니다. 
4. 입력값을 받습니다.
5. 입력값이 추측값보다 적으면 "값이 작습니다"라고 표시합니다.
6. 입력값이 추측값보다 크면 "값이 큽니다"라고 표시합니다.
7. 입력값이 추측값과 같으면 "정답"을 출력하며 종료합니다.  
8. 카운트 값을 -1씩 감소하며 숫자를 출력합니다. 
9. 카운트 값이 0이 될 때까지 4.로 이동하여 반복합니다.  
javascript로 소스코드를 만들어주세요
```


```JavaScript
var randomNumber = Math.floor(Math.random() * 50) + 1;
var count = 10;

while (count > 0) {
  var inputNumber = prompt("숫자를 입력하세요.");

  if (inputNumber < randomNumber) {
    alert("값이 작습니다.");
  } else if (inputNumber > randomNumber) {
    alert("값이 큽니다.");
  } else {
    alert("정답입니다!");
    break;
  }

  count--;
}
```
#### mission
> 아래의 기능을 code 또는 prompt로 수정하여 구현하세요
- 카운트 값을 입력받을 때마다 출력하세요 
- 10번이 넘은 후에는 "맞추지 못했습니다"를 출력하세요