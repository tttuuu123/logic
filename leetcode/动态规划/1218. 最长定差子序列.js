/* 
  给你一个整数数组 arr 和一个整数 difference，请你找出并返回 arr 中最长等差子序列的长度，该子序列中相邻元素之间的差等于 difference 。

  子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。


  示例 1：

  输入：arr = [1,2,3,4], difference = 1
  输出：4
  解释：最长的等差子序列是 [1,2,3,4]。
  示例 2：

  输入：arr = [1,3,5,7], difference = 1
  输出：1
  解释：最长的等差子序列是任意单个元素。
  示例 3：

  输入：arr = [1,5,7,8,5,3,4,2,1], difference = -2
  输出：4
  解释：最长的等差子序列是 [7,5,3,1]。
  

  提示：

  1 <= arr.length <= 105
  -104 <= arr[i], difference <= 104
*/

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const dp = Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[i] - arr[j] === difference) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

/**
 * 上述方法时间复杂度O(n^2)，会超时
 */

var longestSubsequence = function(arr, difference) {
  let ret = 0;
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num - difference) || 0) + 1);
    ret = Math.max(ret, map.get(num));
  }
  return ret;
};


