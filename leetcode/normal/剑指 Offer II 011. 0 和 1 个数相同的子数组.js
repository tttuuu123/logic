/* 
  给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

  示例 1：

  输入: nums = [0,1]
  输出: 2
  说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
  示例 2：

  输入: nums = [0,1,0]
  输出: 2
  说明: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。
   

  提示：

  1 <= nums.length <= 105
  nums[i] 不是 0 就是 1

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/A1NYOS
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let ret = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let count0 = 0, count1 = 0;
    for (let j = i; j < nums.length; j += 1) {
      if (count0 > (nums.length >> 1) || count1 > (nums.length >> 1)) break;
      if (nums[j] === 0) {
        count0 += 1;
      } else {
        count1 += 1;
      }
      if (count0 === count1 && count0 !== 0) {
        ret = Math.max(ret, j - i + 1);
      }
    }
  }
  return ret;
};

/**
 * 暴力解，超时
 */

var findMaxLength = function(nums) {
  const map = new Map();
  map.set(0, -1);
  let pre = 0, ret = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      pre -= 1;
    } else {
      pre += 1;
    }
    if (map.has(pre)) {
      ret = Math.max(ret, i - map.get(pre));
    } else {
      map.set(pre, i);
    }
  }
  return ret;
};

/**
 * 将0看作-1，就转换为求和为0的最长子数组的问题
 * 用哈希+前缀和
 * key为前缀和，val为下标
 * 若 下标i的前缀和 === 下标j的前缀和
 * 那么说明 i 到 j 之间的子串中 2种数字数量一样
 */