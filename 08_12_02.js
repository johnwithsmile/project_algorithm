/* 

평균 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/12944

*/

function solution(arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length) {
      sum = sum + arr[i];
      answer = sum / arr.length;
    }
  }

  return answer;
}

/* 

원하는 모습은 for문을 만든다음
arr[0]~arr[1] arr의 길이까지 sum에 더해놓은다음
arr.의 길이만큼 -> 평균을 구하게하는 갯수만큼 나눠놓고
answer에 넣어두면 된다.

 */
