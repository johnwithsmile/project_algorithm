/* 
삼각형의 완성조건

선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 3입니다.
1 ≤ sides의 원소 ≤ 1,000

입출력 예
sides	result
[1, 2, 3]	2
[3, 6, 2]	2
[199, 72, 222]	

가장 긴 수 찾기 Math.max 
나머지 두개 합치기
비교

*/
function solution(sides) {
  const longestSide = Math.max(...sides);
  const sumOfOthers = sides.reduce((sum, side) => sum + side, 0) - longestSide;

  return longestSide < sumOfOthers ? 1 : 2;
}
