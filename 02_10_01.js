// 배열의 평균값

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return 하도록 solution 함수를 완성해주세요.numbers가
// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
// 입출력 예
// numbers	result
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	5.5
// [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	94.0

// for로 처음부터 끝까지 다 더한다음에 갯수만큼(길이만큼)나누기
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer = answer + numbers[i];
  }
  return answer / numbers.length;
}
