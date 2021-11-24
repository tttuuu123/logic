/**
 * 有一个数字序列，求其中最长严格上升子序列长度
 */

function run(arr) {
  const dp = [];
  for (let i = 0; i < arr.lenth; i += 1) {
    dp[i] = 1;
    for (let j = 0; j < i; i += 1) {
      if (arr[j] >= arr[i]) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}