# prompt1(with bard)

```
❓
javascript에서
1. 이름과 성적을 입력받는다. 
2. 성적은 0부터 100까지만 입력받는다. 
3. 입력된 성적 중 최고점수를 이름과 함께 성적을 출력한다. 
4. 입력된 성적 중 최저점수를 이름과 함께 성적을 출력한다.
5. 평균점수를 출력한다.
다른 답안 보기
```

Javascript로 작성된 코드는 다음과 같습니다.

```javascript
const names = [];
const scores = [];

// 이름과 성적을 입력받습니다.
function input() {
  const name = prompt('이름을 입력하세요: ');
  const score = +prompt('성적을 입력하세요: ');
  if (score >= 0 && score <= 100) {
    names.push(name);
    scores.push(score);
  } else {
    alert('성적은 0~100 사이의 숫자만 입력하세요.');
  }
}

// 최고점수를 이름과 함께 출력합니다.
function getHighestScore() {
  const highestScore = Math.max(...scores);
  const highestScoreName = names[scores.indexOf(highestScore)];
  return `최고점수는 ${highestScoreName}의 ${highestScore}점입니다.`;
}

// 최저점수를 이름과 함께 출력합니다.
function getLowestScore() {
  const lowestScore = Math.min(...scores);
  const lowestScoreName = names[scores.indexOf(lowestScore)];
  return `최저점수는 ${lowestScoreName}의 ${lowestScore}점입니다.`;
}

// 평균점수를 출력합니다.
function getAverageScore() {
  const sum = scores.reduce((a, b) => a + b);
  const averageScore = sum / scores.length;
  return `평균점수는 ${averageScore}점입니다.`;
}

// 메인 함수입니다.
function main() {
  while (true) {
    input();
    const message = getHighestScore() + '\n' + getLowestScore() + '\n' + getAverageScore();
    alert(message);
    const answer = prompt('계속하시겠습니까? (Y/N)');
    if (answer === 'N') {
      break;
    }
  }
}

main();

```


```
코드를 사용할 때는 주의하시기 바랍니다. 자세히 알아보기
이 코드를 실행하면 다음과 같은 결과가 출력됩니다.

코드 스니펫
이름을 입력하세요: 김철수
성적을 입력하세요: 90
계속하시겠습니까? (Y/N)
Y
이름을 입력하세요: 이영희
성적을 입력하세요: 80
계속하시겠습니까? (Y/N)
Y
이름을 입력하세요: 박민수
성적을 입력하세요: 70
계속하시겠습니까? (Y/N)
N
최고점수는 김철수의 90점입니다.
최저점수는 박민수의 70점입니다.
평균점수는 80점입니다.
```

#### mission
> 아래의 기능을 code 또는 prompt로 수정하여 구현하세요
- 이름과 성적의 입력값이 없을 시 종료되도록 수정하세요
- 평균이 정수값만 나오도록 수정하세요 
