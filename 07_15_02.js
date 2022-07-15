/* 

6. 배열의 기능

주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.

예상 결과
console.log(fruits) // ["맛있는 사과", "맛있는 바나나"]

*/
let fruits = ["사과", "바나나"];
let nom = "맛있는 ";

for (i = 0; i < fruits.length; i++) {
  fruits[i] = nom + fruits[i];
}
console.log(fruits);
/* 

원하는 진행구조
let fruits = ["사과", "바나나"];
let nom = "맛있는 ";
fruits[0] = nom + fruits[0];
fruits[1] = nom + fruits[1];
console.log(fruits);


 */
