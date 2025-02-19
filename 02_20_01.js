// 세균 증식
// 문제 설명
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 1 ≤ n ≤ 10
// 1 ≤ t ≤ 15
// 입출력 예
// n	t	result
// 2	10	2048
// 7	15	229,376

// .length를 쓰면 금방 풀 것 같은데, 문자열이라 셀 수 없음
// 문자열을 배열로 변환, split()사용
// 이후 .length로 길이 구하고, *2로 풀이!

function solution(message) {
  let answerArr = message.split("");
  // 문자열을 배열로 전환
  return (result = answerArr.length * 2);
  // 길이를 구한 후 *2
}
