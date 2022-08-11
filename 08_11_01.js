/* 

핸드폰 번호 가리기
https://school.programmers.co.kr/learn/courses/30/lessons/12948

*/

function solution(phone_number) {
  let answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer = answer + "*";
    } else {
      answer = answer + phone_number[i];
    }
  }
  return answer;
}

/* 

항상 console.log, typeof로 확인하기 

메소드로 하면 간단하게 할 수 있다. (물론 정규표현식도 가능)
function solution(phone_number) {
    let answer = ""
    answer = answer.padStart(phone_number.length - 4, "*")  //뒷글자 제외 나머지 별표로 채움
    answer += phone_number.slice( phone_number.length - 4, phone_number.length); //해당 길이만큼 잘라줌(어디서,어디까지)
    
    return answer
}
  
 */
