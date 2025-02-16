// // 문자열 안에 문자열
// // 문제 설명
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
// // 제한사항
// 1 ≤ str1의 길이 ≤ 100
// 1 ≤ str2의 길이 ≤ 100
// 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.

// 루프로 st1을 반복하면서 str2반복하기?

// 더 쉽게는 includes 메서드 활용
// function solution(str1, str2) {
//   return str1.includes(str2) ? 1 : 2;
// }
function solution(str1, str2) {
  for (let i = 0; i <= str1.length - str2.length; i++) {
    // str1의 현재 인덱스부터 str2의 길이만큼의 부분 문자열을 비교
    if (str1.substring(i, i + str2.length) === str2) {
      return 1; 
    }
  }
  return 2;
}