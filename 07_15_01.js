/* 

5. 배열의 기능

학생들의 이름이 담긴 student 배열이 있습니다.
배열에서 2번째 요소까지의 데이터들을 뽑아 새로운 배열로 만드세요.

주의사항
slice 기능을 이용해서 문제를 풀어야 합니다.
새로운 배열을 선언, 할당해야합니다.
배열의 인덱스는 0부터 시작합니다. 

예상 결과
console.log(newArr) // ["철수", "영희", "훈이"]

*/

let students = ["철수", "영희", "훈이", "짱구", "유리"];
const newArr = students.slice(0, 3);
console.log(newArr);
/* 

mdn을 활용하라!

slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 
원본 배열은 바뀌지 않습니다.
arr.slice([begin[, end]])

// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

결과는
myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
         'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple

 */
