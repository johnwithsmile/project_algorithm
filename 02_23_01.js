// 짝수 홀수 개수
// // 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000
// 예시
// num_list	result
// [1, 2, 3, 4, 5]	[2, 3]
// [1, 3, 5, 7]	[0, 4]

// 보자마자 filter가 생각났다.
// 짝수 홀수는 %2로 나머지가 0인가 아닌가로 구별 가능
// 개수는 .length로 센다.
// 그럼 짝수 갯수 세고 홀수갯수
// 출력하면 끝!

function solution(num_list) {
  const evenCount = num_list.filter((num) => num % 2 === 0).length; // 짝수 개수
  const oddCount = num_list.filter((num) => num % 2 !== 0).length; // 홀수 개수
  return [evenCount, oddCount];
}

// reduce를 사용하면 더 쉽고 성능도 좋다..

function solution(num_list) {
  return num_list.reduce(
    ([even, odd], num) => (num % 2 === 0 ? [even + 1, odd] : [even, odd + 1]),
    [0, 0]
  );
}
