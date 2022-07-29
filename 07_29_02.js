/* 

28. 점수에 따른  등급

입력되는 score에 따라 알맞은 등급을 적어야 합니다.

100~90 → "A"

89~80 → "B"

79~70 → "C"

69~60 → "D"

59점 이하는 "F"

100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

입력인자

score - 숫자열

예상 결과

*/

function grade(score) {
  if (score > 100 || score < 0) {
    console.log("잘못된 점수입니다.");
  } else if (score >= 100 || score > 90) {
    console.log("A");
  } else if (score >= 90 || score > 80) {
    console.log("B");
  } else if (score >= 80 || score > 70) {
    console.log("C");
  } else if (score >= 70 || score > 60) {
    console.log("D");
  } else console.log("F");
}

/* 

str = '12345'라고하면 제일 큰 수를 가져와야함
let biggest = 0 이라고 설정, length까지 반복, 1씩증가
for(let i = 0; i < str.length; i = i+){
	console.log(str[i])
}
큰수 가져오기 큰수는 저장, 아니면 넘어가기

typeof는 다음에 오는 것의 속성 평가, str이므로 숫자로 변경해줘야함


 */
