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