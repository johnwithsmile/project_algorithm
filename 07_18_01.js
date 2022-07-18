/* 

7. 문자열 배열

상수 number는 핸드폰 번호가 담긴 문자열입니다.
해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.

예상결과
console.log(arr)// ["010", "1234", "5678"]

*/
const number = "01012345678";
const firstarr = number[0] + number[1] + number[2];
const secondarr = number[3] + number[4] + number[5] + number[6];
const thirdarr = number[7] + number[8] + number[9] + number[10];
// const arr = [];
const arr = arr.concat(firstarr, secondarr, thirdarr);

console.log(arr);
/* 

원하는 진행구조
const number = "01012345678";
arr[0] = num[0] + num[1] + num[2]
arr[1] = num[3] + num[4] + num[5] + num[6]
arr[2] = num[7] + num[8] + num[9] + num[10]

흠.. 너무 노가다인거같은데 방식이 생각이 안난다
 */
