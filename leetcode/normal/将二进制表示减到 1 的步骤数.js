/* 
  给你一个以二进制形式表示的数字 s 。请你返回按下述规则将其减少到 1 所需要的步骤数：

  如果当前数字为偶数，则将其除以 2 。

  如果当前数字为奇数，则将其加上 1 。

  题目保证你总是可以按上述规则将测试用例变为 1 。

  示例 1：

  输入：s = "1101"
  输出：6
  解释："1101" 表示十进制数 13 。
  Step 1) 13 是奇数，加 1 得到 14 
  Step 2) 14 是偶数，除 2 得到 7
  Step 3) 7  是奇数，加 1 得到 8
  Step 4) 8  是偶数，除 2 得到 4  
  Step 5) 4  是偶数，除 2 得到 2 
  Step 6) 2  是偶数，除 2 得到 1  
  示例 2：

  输入：s = "10"
  输出：1
  解释："10" 表示十进制数 2 。
  Step 1) 2 是偶数，除 2 得到 1 
  示例 3：

  输入：s = "1"
  输出：0
 
  提示：

  1 <= s.length <= 500
  s 由字符 '0' 或 '1' 组成。
  s[0] == '1'


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
  let ret = parseInt(s, 2);
  let count = 0;
  while (ret !== 1) {
    if (ret % 2 === 0) {
      ret >>= 1;
    } else {
      ret += 1;
    }
    count += 1;
  }
  return count;
};

/**
 * 要注意s是个字符串的二进制数
 * 所以大概率要找规律了
 * 
 * 0001                                               1
 * 0010 -> 001                                        2
 * 0011 -> 0100 -> 010 -> 01                          3
 * 0100 -> 010 -> 01                                  2
 * 0101 -> 011 -> 100 -> 10 -> 1                      4
 * 0110 -> 011 -> 100 -> 10 -> 1                      4
 * 0111 -> 1000 -> 100 -> 10 -> 1                     4
 * 1000 -> 100 -> 10 -> 1                             3
 * 1001 -> 1010 -> 101 -> 110 -> 11 -> 100 -> 10 -> 1 6
 * 
 * 1101 -> 1110 -> 111 -> 1000 -> 100 -> 10 -> 1      6
 * 1111 -> 10000 -> 1000 -> 100 -> 10 -> 1            5
 * 
 * 操作次数的基数为s.length - 1，例如1000要进行3次右移1位操作
 * s中的最高位的1和最低位的1之间如果有0，则要进行了一次+1操作
 */

 /**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
  let zeroCount = 0;
  let flag = false;
  for (let i = s.length - 1; i > 0; i -= 1) {
    if (s[i] === '1') {
      flag = true;
      continue;
    }
    if (!flag) continue;
    if (s[i] === '0') zeroCount += 1;
  }
  return flag ? s.length + zeroCount + 1 : s.length - 1;
};