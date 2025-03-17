/* 
모음 제거

영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

filter를 사용해보자
filter로 거를 모음 만들기,
split으로 배열 만들기
filter사용

끝!

*/
function solution(my_string) {
  const str = "aeiou";
  let newString = my_string
    .split("")
    .filter((el) => !str.includes(el))
    .join("");

  return newString;
}
