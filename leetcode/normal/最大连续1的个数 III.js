/* 
  给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。

  返回仅包含 1 的最长（连续）子数组的长度。
   
  示例 1：

  输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
  输出：6
  解释： 
  [1,1,1,0,0,1,1,1,1,1,1]
  粗体数字从 0 翻转到 1，最长的子数组长度为 6。
  示例 2：

  输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
  输出：10
  解释：
  [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
  粗体数字从 0 翻转到 1，最长的子数组长度为 10。
   

  提示：

  1 <= A.length <= 20000
  0 <= K <= A.length
  A[i] 为 0 或 1 

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/max-consecutive-ones-iii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let remain = K;
  let temp = [];
  let max = 0;
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] === 0) {
      if (remain > 0) {
        remain -= 1;
        temp.push(A[i]);
      } else {
        while (temp[0] === 1) {
          temp.shift();
        }
        if (temp[0] === 0) {
          temp.shift();
          temp.push(A[i]);
        }
      }
    } else {
      temp.push(A[i]);
    }
    max = Math.max(temp.length, max);
  }
  return max;
};

/**
 * 用一个temp窗口记录满足条件的子数组，remain代表剩余可替换1数量
 * 当右边（也就是下标i）为0时，就判断remain是否大于0，如果小于0，就先把temp中从下标0开始的连续1都出队，再判断队头是否为0，为0则出队，下标i的0入队
 * 优化：
 * 可以不用temp窗口，
 * 而改用一个变量left记录下第一个0的位置，
 * 碰到0时，就把left往左的数量清楚
 */