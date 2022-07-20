/* 

19. 홀짝
입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만드려고 합니다.
입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 듸워주세요. 
input1, input2에는 boolean 타입인 true, false가 입력됩니다.
둘 중에 하나라도 true면 "true", 두 개 모두 false면 "false"라는 문구를 띄워주세요

입력
num은 0 이상인 자연수

주의사항
if는 함수 안에서 사용
console.log("Even")으로 입력하면 "Even"이라는 값이 출력됩니다.
|| (OR) 연산자 또는 &&(AND) 연산자를 이용해 보세요.

예상 결과
evenOdd(12) // "Even"
evenOdd(15) // "Odd"
evenOdd(0)  // "Zero"

*/

function evenOdd(num) {
  if (num === 0) {
    console.log("Zero");
  } else if (num % 2 === 0) {
    console.log("Even");
  } else console.log("Odd");
}

/* 

조건문 기초

 */
