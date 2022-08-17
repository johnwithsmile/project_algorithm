/* 

가운데 글자 가져오기
https://school.programmers.co.kr/learn/courses/30/lessons/12903
*/

function solution(s) {
  let answer = "";

  if (s.length % 2 == 0) {
    // 짝수일 경우,
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    answer = s[Math.floor(s.length / 2)]; // 홀수일 경우, 반내림 하기
  }
  return answer;
}
/* 

원하는 모습은 전체 길이를 2로 나눈 인덱스 이전 값과 인덱스 값을 출력한다.
홀수일 경우는 소숫점이기 떄문에 floor로 반내림을 해준다. 
 */
