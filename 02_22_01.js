// 문자 반복 출력하기
// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 제한사항
// 2 ≤ my_string 길이 ≤ 5
// 2 ≤ n ≤ 10
// "my_string"은 영어 대소문자로 이루어져 있습니다.
// 예시
// my_string	n	result
// "hello"	3	"hhheeellllllooo"

// 그냥 repeat을 하면 hellohellohello출력
// 그러니까 ...string으로 전개
// map으로 각 문자를 repeat(n)하게 해줌
// join("")으로 결합
// 필터는 배열에만 사용할 수 있다.
// split으로 배열로 변환 후 letter를 제거해야함.
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}
