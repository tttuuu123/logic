/* 
  给你一个整数数组 arr 和一个目标值 target ，请你返回一个整数 value ，使得将数组中所有大于 value 的值变成 value 后，数组的和最接近  target （最接近表示两者之差的绝对值最小）。

  如果有多种使得和最接近 target 的方案，请你返回这些整数中的最小值。

  请注意，答案不一定是 arr 中的数字。

  示例 1：

  输入：arr = [4,9,3], target = 10
  输出：3
  解释：当选择 value 为 3 时，数组会变成 [3, 3, 3]，和为 9 ，这是最接近 target 的方案。
  示例 2：

  输入：arr = [2,3,5], target = 10
  输出：5
  示例 3：

  输入：arr = [60864,25176,27249,21296,20204], target = 56803
  输出：11361

  提示：

  1 <= arr.length <= 10^4
  1 <= arr[i], target <= 10^5


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/sum-of-mutated-array-closest-to-target
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
  arr.sort((a, b) => a - b);
  const len = arr.length;
  const prefix = [0];
  for (let i = 0; i < len; i += 1) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  let l = 0;
  let r = arr[len - 1];
  let ret;
  while (l <= r) {
    const mid = (l + r) >>> 1;
    const idx = binarySearch(arr, mid);
    const sum = prefix[idx] + (len - idx) * mid;
    if (sum <= target) {
      ret = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  const minVal = check(arr, ret);
  const maxVal = check(arr, ret + 1);
  return Math.abs(minVal - target) <= Math.abs(maxVal - target) ? ret : ret + 1;

  // 在arr中查找最接近的不大于target的值的下标
  function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
      const mid = (l + r) >>> 1;
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return l;
  }

  function check(arr, x) {
    let sum = 0;
    for (const num of arr) {
      sum += Math.min(num, x);
    }
    return sum;
  }
};

/**
 * 因为arr[i]的范围是[1, 10^5]
 * 所以value的范围是[0, 10^5]
 * 可以用枚举来找到这个value
 * 又因为value确定后，sum的值就确定了，且value变大，sum的和也会变大（或不变），所以可以用二分来加速枚举的过程
 * 二分的mid就是value，然后要判断满足不满足条件，
 * 此时的数组和为 arr[0] + arr[1] + …… + arr[i - 1] + (arr.length - i) * mid 
 * 可以对arr先进行排序，然后用一个前缀和数组加速求和过程，上述过程就变成了 prefix[i] + (arr.length - i) * mid 
 * 同时对于（(arr.length - i) * mid）这部分，实际就是在arr中找到最接近mid的下标
 */