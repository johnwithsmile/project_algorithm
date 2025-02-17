// // 문자열 안에 문자열
// // 문제 설명
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
// // 제한사항
// 1 ≤ num_list의 길이 ≤ 1,000
// 0 ≤ num_list의 원소 ≤ 1,000

// reverse 메서드 사용,
// 원본을 보존하고 싶다면 slice사용!
function solution(num_list) {
  return num_list.slice().reverse();
}
