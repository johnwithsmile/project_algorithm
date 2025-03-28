/* 
순서쌍의 개수

순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution함수를 완성하세요.

a,b의 곱이 n이 되는 답을 구함
n의 약수 구하기
for문 반복으로 
나머지가 0일때 ->  answer 1 증가

끝!
*/

function solution(n) {
  let answer = 0;
  for (let a = 1; a <= n; a++) {
    if (n % a === 0) {
      answer++;
    }
  }
  return answer;
}
