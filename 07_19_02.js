/* 

9. 객체의 키&값 추가

student와 school 두 개의 객체가 있습니다.
student 객체에 school이라는 객체를 할당해야 합니다.

주의사항
객체 안에 객체를 만들 수 있습니다.

예상 결과
console.log(student) // 
	{
    name: '철수',
    age: 8,
    school: {
      name: '다람쥐초등학교',
      teacher: '다람이'
    }
  }
*/

const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

student.school = {};
student.school.name = "다람쥐초등학교";
student.school.teacher = "다람이";

/* 

빈배열 만들고 채우기

student.school = school 이렇게 해도된다.

 */
