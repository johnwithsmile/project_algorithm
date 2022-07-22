/* 

23. 숫자 더하기

문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.

반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

입력
str은 문자열입니다. 

주의사항 
- for을 이용해서 문제를 풀어야 합니다.
- 문자열도 배열입니다.
- 대문자 "A" 문자열도 "a" 에 포함입니다.

예상 결과
countLetter("I am from Korea")                         // 2
countLetter("A day without laughter is a day wasted.") // 6
*/

function countLetter(str) {
  let count = 0;
  for (let i = 1; i <= length.str - 1; i = i++) {
    console.log(i);
    if (str[i] === "a" || str[i] === "A") {
      count++;
    }
  }
}

/* 

반복문 기초 

 */