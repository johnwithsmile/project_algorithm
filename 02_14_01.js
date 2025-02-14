// 짝수의 합
// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// 0 < n ≤ 1000

// 입출력 예
// n	result
// 10	30
// 4	6

//판단과정
// 반복문으로 0부터 n까지 접근
// 짝수(2로 나눈 나머지가 0) 만 빼기
// 다 더하기

function solution(n) {
  for (let i = 0; i < n; i++) {
    let answer = 0;
    if (i % 2 === 0) {
      answer = answer + i;
    }
    return answer;
  }
}
