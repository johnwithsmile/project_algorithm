/* 

26. 홀수 문자열

num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.

num이 5일 경우에는 "135"입니다.
입력 인자
num은 숫자열입니다.

주의사항
for을 이용해서 문제를 풀어야 합니다.
짝를 제외하는 조건을 추가해야합니다.

예상 결과 
makeOdd(5) // "135"
makeOdd(7) // "1357"

*/

function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      str = str + i;
    }
    console.log(str);
  }
}

/* 

for문으로 만들면 i가 num넣은 숫자대로 12345 하나씩 출력함
그럼 홀수를 분류함, 2로 나눈값이 1인 숫자

그 값을 빈 str에 더하면 됨 
 */
