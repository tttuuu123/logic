/* 
  我们称一个分割整数数组的方案是 好的 ，当它满足：

  数组被分成三个 非空 连续子数组，从左至右分别命名为 left ， mid ， right 。
  left 中元素和小于等于 mid 中元素和，mid 中元素和小于等于 right 中元素和。
  给你一个 非负 整数数组 nums ，请你返回 好的 分割 nums 方案数目。由于答案可能会很大，请你将结果对 109 + 7 取余后返回。

  示例 1：

  输入：nums = [1,1,1]
  输出：1
  解释：唯一一种好的分割方案是将 nums 分成 [1] [1] [1] 。
  示例 2：

  输入：nums = [1,2,2,2,5,0]
  输出：3
  解释：nums 总共有 3 种好的分割方案：
  [1] [2] [2,2,5,0]
  [1] [2,2] [2,5,0]
  [1,2] [2,2] [5,0]
  示例 3：

  输入：nums = [3,2,1]
  输出：0
  解释：没有好的分割方案。
   

  提示：

  3 <= nums.length <= 105
  0 <= nums[i] <= 104


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/ways-to-split-array-into-three-subarrays
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
  const MOD = 1e9 + 7;
  const sum = getSum(nums);
  let ret = 0;
  for (let j = 2; j < nums.length; j += 1) {
    for (let i = 1; i < j; i += 1) {
      const left = getSum(nums.slice(0, i));
      const mid = getSum(nums.slice(i, j));
      const right = sum - left - mid;
      if (left <= mid && mid <= right) {
        ret = (ret + 1) % MOD;
      }
      if (left > mid) {
        break;
      }
    }
  }
  return ret;

  function getSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
};

/**
 * 暴力解，超时
 * 先考虑用前缀和优化下求和过程
 */
var waysToSplit = function(nums) {
  const MOD = 1e9 + 7;
  const prefix = [0];
  for (let i = 0; i < nums.length; i += 1) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  let ret = 0;
  for (let j = 2; j < nums.length; j += 1) {
    for (let i = 1; i < j; i += 1) {
      const left = prefix[i];
      const mid = prefix[j] - prefix[i];
      const right = prefix[nums.length] - prefix[j];
      if (left <= mid && mid <= right) {
        ret = (ret + 1) % MOD;
      }
      if (left > mid) {
        break;
      }
    }
  }
  return ret;
};

/**
 * 还是超时
 * 考虑可以先定下左边界i
 * 然后在i右侧
 * 找到最小可以的右边界l以及最大可以的右边界r，那么r - l就是这个i下所有满足条件的数量
 */

var waysToSplit = function(nums) {
  const MOD = 1e9 + 7;
  const prefix = [0];
  let ret = 0;
  const len = nums.length; // prefix.length = len + 1
  for (let i = 0; i < len; i += 1) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  // 这里i是prefix中的下标
  for (let i = 1; i < len - 1; i += 1) {
    // mid + right 必须不小于 left * 2（极限场景就是left === mid === right，这时mid + right === left * 2)
    // 这样下面二分就只需要考虑 mid > left || right > mid 中一种场景
    if (prefix[i] * 2 > prefix[len] - prefix[i]) break;
    const l = binarySearchLow(i);
    const r = binarySearchHigh(i);
    if (r >= l) ret = (ret + r - l + 1) % MOD; // r和l都是下标，需要+1才是数量
  }
  return ret;

  function binarySearchLow(i) {
    let l = i + 1;
    let r = len - 1;
    let ret;
    while (l <= r) {
      const mid = (l + r) >>> 1;
      const leftTotal = prefix[i];
      const midTotal = prefix[mid] - leftTotal;
      // 查找最小的右边界只需要考虑 mid >= left 即可，因为保证了 mid + right >= left * 2
      if (leftTotal <= midTotal) {
        ret = mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return ret;
  }

  function binarySearchHigh(i) {
    let l = i + 1;
    let r = len - 1;
    let ret;
    while (l <= r) {
      const mid = (l + r) >>> 1;
      const leftTotal = prefix[i];
      const midTotal = prefix[mid] - leftTotal;
      const rightTotal = prefix[len] - leftTotal - midTotal;
      // 同理，查找最大的右边界只需要考虑 right >= mid
      if (midTotal <= rightTotal) {
        ret = mid;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return ret;
  }
};

/**
 * 难点主要还是考虑区间
 * 尤其是二分中的l、r的区间
 * 因为每个数组都要非空
 * 所以l = i + 1，不能包含i（不能喝left重叠）
 * 同理r = len - 1，因为要保证给right留至少一个元素
 * 
 * 总结：
 * 三指针，先确定左边界指针
 * 然后再定位右边界指针范围，可以用二分加速查找
 */