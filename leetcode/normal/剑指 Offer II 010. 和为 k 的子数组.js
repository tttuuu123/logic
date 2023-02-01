/* 
  给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。

  示例 1：

  输入:nums = [1,1,1], k = 2
  输出: 2
  解释: 此题 [1,1] 与 [1,1] 为两种不同的情况
  示例 2：

  输入:nums = [1,2,3], k = 3
  输出: 2
   

  提示:

  1 <= nums.length <= 2 * 104
  -1000 <= nums[i] <= 1000
  -107 <= k <= 107

   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/QTMn0o
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let ret = 0;
  let l = 0, r = 0, temp = 0;
  for (; r < nums.length; r += 1) {
    temp += nums[r];
    while (temp > k) {
      temp -= nums[l];
      l += 1;
    }
    if (temp === k && l <= r) {
      ret += 1;
      temp -= nums[l];
      l += 1;
    }
  }
  return ret;
};

/** 
 * 因为有负数，所以上面的滑动窗口有bug
 */

var subarraySum = function(nums, k) {
  let ret = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let sum = 0;
    for (let j = i; j < nums.length; j += 1) {
      sum += nums[j];
      if (sum === k) {
        ret += 1;
      }
    }
  }
  return ret;
};

/**
 * 暴力解
 */


var subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let ret = 0, pre = 0;
  for (const num of nums) {
    pre += num;
    if (map.has(pre - k)) {
      ret += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return ret;
};

/**
 * 利用哈希表，key为前缀和，val为这个前缀和出现次数
 */