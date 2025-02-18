// 최댓값 만들기 (1)
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요
// 제한사항
// 제한사항
// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100
// 입출력 예
// numbers	result
// [1, 2, 3, 4, 5]	20
// [0, 31, 24, 10, 1, 9]	744

// 배열 정렬, sort활용, 내림차순으로도 사용 가능.
// 그리고나서 가장 큰 두 숫자, 0번과 1번 배열을 곱함
// 반환

function solution(numbers) {
  // 내림차순으로 정렬
  numbers.sort((a, b) => b - a);

  // 가장 큰 두 수를 곱하여 반환
  return numbers[0] * numbers[1];
}
