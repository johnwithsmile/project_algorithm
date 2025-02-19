// 편지지
// 문제 설명
// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
// 제한사항
// 공백도 하나의 문자로 취급합니다.
// 1 ≤ message의 길이 ≤ 50
// 편지지의 여백은 생각하지 않습니다.
// message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다.
// 입출력 예
// message	result
// "happy birthday!"	30
// "I love you~"	22

// .length를 쓰면 금방 풀 것 같은데, 문자열이라 셀 수 없음
// 문자열을 배열로 변환, split()사용
// 이후 .length로 길이 구하고, *2로 풀이!

function solution(message) {
  let answerArr = message.split("");
  // 문자열을 배열로 전환
  return (result = answerArr.length * 2);
  // 길이를 구한 후 *2
}
