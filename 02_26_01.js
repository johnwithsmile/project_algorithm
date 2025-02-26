/* 
문자열 뒤집기  
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
제한사항
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"

제일 먼저 생각나는건 reverse()인데 해보니까 안됨. 배열로 변환해야한다.
split으로 배열 만들기 
reverse로 뒤집고
join으로 합체.
셋다 붙여놓으니까 된다!!
*/

function solution(my_string) {
  return my_string.split("").reverse().join("");
}
