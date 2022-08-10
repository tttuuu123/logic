/* 
  给你三个正整数 n、index 和 maxSum 。你需要构造一个同时满足下述所有条件的数组 nums（下标 从 0 开始 计数）：

  nums.length == n
  nums[i] 是 正整数 ，其中 0 <= i < n
  abs(nums[i] - nums[i+1]) <= 1 ，其中 0 <= i < n-1
  nums 中所有元素之和不超过 maxSum
  nums[index] 的值被 最大化
  返回你所构造的数组中的 nums[index] 。

  注意：abs(x) 等于 x 的前提是 x >= 0 ；否则，abs(x) 等于 -x 。

  示例 1：

  输入：n = 4, index = 2,  maxSum = 6
  输出：2
  解释：数组 [1,1,2,1] 和 [1,2,2,1] 满足所有条件。不存在其他在指定下标处具有更大值的有效数组。
  示例 2：

  输入：n = 6, index = 1,  maxSum = 10
  输出：3


  提示：

  1 <= n <= maxSum <= 109
  0 <= index < n

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/maximum-value-at-a-given-index-in-a-bounded-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
  let l = 1;
  let r = maxSum - (n - 1);
  let ret;
  while (l <= r) {
    const mid = (l + r) >>> 1;
    if (getSum(mid) <= maxSum) {
      ret = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ret;

  function getSum(val) {
    let sum = val;
    let temp = val;
    
    let i = index - 1;
    while (i >= 0) {
      if (temp > 1) temp -= 1;
      sum += temp;
      i -= 1;
    }
    temp = val;
    i = index + 1;
    while (i < n) {
      if (temp > 1) temp -= 1;
      sum += temp;
      i += 1;
    }
    return sum;
  }
};

/**
 * 在区间[0, index] 数组一定是非递减的，在区间[index, n - 1]一定是非递增的 才能满足题意
 * 所以考虑用暴力解法，index的val范围为[1, maxSum - (n - 1)]
 * 那么对于满足条件的arr，其和sum需要不大于maxSum
 * 可以用二分加速这个暴力过程
 * 时间复杂度：二分O(logN)，求和O(N) 所以是O(NlogN)
 */


var maxValue = function(n, index, maxSum) {
  var ans = 1;
  maxSum -= n;
  var left = index,
      right = index;
  while (maxSum > 0) {
      if (left === 0 && right === n - 1) {
          return ans + ~~(maxSum / n);
      }
      ans++;
      maxSum -= right - left + 1;
      left = Math.max(0, left - 1);
      right = Math.min(n - 1, right + 1);
  }
  if (maxSum < 0) {
      ans--;
  }
  return ans;
};

/**
 * 先给底部都铺一层1
 * 然后每次给l，r之间每个元素+1，并让l和r向index靠近一位
 */