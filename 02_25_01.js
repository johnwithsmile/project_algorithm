/* 
두 수의 합 
정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
-50,000 ≤ num1 ≤ 50,000
-50,000 ≤ num2 ≤ 50,000

입출력 예
num1	num2	result
2	3	5
100	2	102

그냥 합을 리턴한다 끝!

*/

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
