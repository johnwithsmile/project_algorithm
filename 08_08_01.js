/* 

같은 숫자는 싫어
https://school.programmers.co.kr/learn/courses/30/lessons/12906
*/

function solution(arr) {
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

/* 
  
반환해야할 배열 answer을 선언
반복문 사용,arr을 하나씩 확인
이후 arr의 i 와 i+1이 같지 않을때만
answer에 push로 넣어준다.
이후 answer반환
  
 */
