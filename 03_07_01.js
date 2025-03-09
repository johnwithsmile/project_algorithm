/* 
피자 나눠 먹기 (1)

머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

제한사항
1 ≤ n ≤ 100
입출력 예
n	result
7	1
1	1
15	3

n/7 을 하면 소숫점이 생김
Math.floor하면 내림이라 남은사람의 피자가 +1 안되니까
올림함수를사용

Math.ceil(n/7)
*/

function solution(n) {
  return Math.ceil(n / 7);
}
