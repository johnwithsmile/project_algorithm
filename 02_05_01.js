// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Constraints
// -231 <= x <= 231 - 1
// Follow up: Could you solve it without converting the integer to a string?

// // 앞에서 읽어도 같고, 뒤에서 읽어도 같은 수를 팰린드롬수라고 한다.
// 받은 숫자를 배열로 전환 split()
// 반복문으로 거꾸로 배치, reverse()도 사용가능
// 같으면 true, 틀리면 false 출력.
/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
  const xArr = x.toString().split("");
  const reversedArr = xArr.slice().reverse();
  if (reversedArr.join("") === xArr.join("")) {
    return true;
  } else {
    return false;
  }
};

// 숫자 변환 없이 해결하는 방법 (속도 ↑ 메모리 ↓)
function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reverted = 0;
  while (x > reverted) {
    reverted = reverted * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reverted || x === Math.floor(reverted / 10);
}

// 숫자의 절반을 뒤집어 비교 (시간 복잡도 O(log n))
