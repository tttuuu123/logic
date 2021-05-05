/* 
  给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

  我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

  所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

  请你返回「表现良好时间段」的最大长度。

   

  示例 1：

  输入：hours = [9,9,6,0,6,6,9]
  输出：3
  解释：最长的表现良好时间段是 [9,9,6]。
   

  提示：

  1 <= hours.length <= 10000
  0 <= hours[i] <= 16

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-well-performing-interval
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  const preSumArr = [0]; // 存放一个第0位，也就是hours[-1]位置
  for (let i = 0; i < hours.length; i += 1) {
    preSumArr[i + 1] = preSumArr[i] + (hours[i] > 8 ? 1 : -1)
  }
  let max = 0;
  for (let i = 0; i < preSumArr.length - 1; i += 1) {
    for (let j = 1; j < preSumArr.length; j += 1) {
      if ((preSumArr[j] - preSumArr[i]) > 0) {
        max = Math.max(max, j - i);
      }
    }
  }
  return max;
};

/**
 * 前缀和：preSum(n) 代表前n项的和
 * 那么
 * preSum(n) = preSum(n - 1) + p(n)
 * 实际上就是在前缀后中找出最长的一段区间 [a, b]，使得 preSum(b) - preSum(a) > 0，则 b - a 就是结果
 */


// var longestWPI = function(hours) {
//   let max = 0;
//   const idxMap = {
//     0: -1
//   };  // 记录每一种值第一次出现的位置
//   const f = {
//     0: 0
//   };
//   let count = 0;
//   for (let i = 0; i < hours.length; i += 1) {
//     count += hours[i] > 8 ? 1 : -1;
//     if (!idxMap[count]) {
//       idxMap[count] = i;
//       if (!idxMap[count - 1]) {
//         f[count] = 0;
//       } else {
//         f[count] = f[count - 1] + (i - idxMap[count - 1])
//       }
//     }
//     if (!idxMap[count - 1]) continue;
//     max = Math.max(max, f[count - 1] + (i - idxMap[count - 1]));
//   }
//   return max;
// };

/**
 * 用 f(n) 表示 前缀和为 n 的长度
 * 那么本题中就要找 n 和 n - 1 之间的最大长度（因为n - (n - 1)） > 0
 * 则 f(n) = f(n - 1) + poi(n) - poi(n - 1)
 * 但是上述解答在对[6, 9, 6]的时候会出错，还没找到原因
 */