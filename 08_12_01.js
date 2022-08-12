/* 

짝수와 홀수
https://school.programmers.co.kr/learn/courses/30/lessons/12937

*/

function solution(num) {
  let answer = "";
  if (num % 2 === 1) {
    answer = "Odd";
  } else {
    answer = "Even";
  }
  return answer;
}

/* 

% 연산자 사용, 나머지가 1이면 홀수, 없으면 짝수를 활용한다. 

 */
