/* 

https://school.programmers.co.kr/learn/courses/30/lessons/92334

*/

function solution(id_list, report, k) {
  const answer = new Array(id_list.length);
  answer.fill(0);
  const report_list = {}; //

  id_list.map((user) => {
    report_list[user] = []; //key로 userid를 value로 빈 배열을 가지는 객체
  });

  report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      //이용정지 유저
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

/* 

  프로그래머스 카카오 2022 lv1 이게 어딜봐서 lv 1인가 ㅠㅠ

  const answer = new Array(id_list.length);
  answer.fill(0);
  answer배열을 id_list크기만큼 할당하고 fill함수로 0으로 만들어서 초기화시킨다.

  id_list.map((user)=>{report_list[user] = []})
  report_list 객체에 key는 uesr의 id 값을 value는 신고한 사람을 담기 위한 빈 배열을 추가한다.

  report.map((user)=>{
  const [user_id, report_id] = user.split(' ')
  if(!report_list[report_id].includes(user_id)){
    report_list[report_id].push(user_id)
  }        
  })
  report의 값이 ["muzi frodo", ...] 와 같이 '신고한 id 신고당한 id' 형식의 띄어쓰기로 구분된 문자열을 split으로 자르고 각각 user_id와 report_id로 나눠주었다.
  그리고 배열에 포함하는지 여부를 확인하여 포함하지 않을 때 신고자의 이름을 추가하였다.

  for(const key in report_list){
  if(report_list[key].length >= k){
    report_list[key].map((user)=>{
      answer[id_list.indexOf(user)] += 1
    })
  }
  }
  report_list의 배열 길이가 k값 이상이면 정지된 유저이다.
  answer에 해당 유저를 신고한 유저가 받은 메일을 수를 +1 하여준다.
  
 */
