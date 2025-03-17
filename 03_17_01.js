/* 
배열 원소의 길이

문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.

입출력 예
strlist	result
["We", "are", "the", "world!"]	[2, 3, 3, 6]
["I", "Love", "Programmers."]	[1, 4, 12]

길이니까 length사용?
배열의 0번째니까
반복문으로 length만큼 증가 반복, 그리고 계속 값 더하기
*/
function solution(strlist) {
  const answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}
