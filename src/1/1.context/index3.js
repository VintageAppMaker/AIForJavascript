function score_count(scores) {
  // 1. 성적 리스트 생성 및 초기화
  var 성적리스트 = [0, 0, 0, 0, 0];

  // 2. 점수별로 카운트
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    if (score === 100) {
      성적리스트[0]++; // 첫번째 공간에 +1
    } else if (score >= 80 && score <= 99) {
      성적리스트[1]++; // 두번째 공간에 +1
    } else if (score >= 70 && score <= 79) {
      성적리스트[2]++; // 세번째 공간에 +1
    } else if (score >= 60 && score <= 69) {
      성적리스트[3]++; // 네번째 공간에 +1
    } else if (score <= 59) {
      성적리스트[4]++; // 다섯번째 공간에 +1
    }
  }

  return 성적리스트;
}

var scores = [85, 92, 76, 60, 45, 98, 79, 68];
var result = score_count(scores);
console.log(result);
