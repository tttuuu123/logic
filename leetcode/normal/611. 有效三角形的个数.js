/* 
  给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。

  示例 1:

  输入: nums = [2,2,3,4]
  输出: 3
  解释:有效的组合是: 
  2,3,4 (使用第一个 2)
  2,3,4 (使用第二个 2)
  2,2,3
  示例 2:

  输入: nums = [4,2,3,4]
  输出: 4
   

  提示:

  1 <= nums.length <= 1000
  0 <= nums[i] <= 1000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/valid-triangle-number
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let ret = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      let k = nums.length - 1;
      while (j !== k) {
        if (nums[i] + nums[j] > nums[k]) {
          ret += k - j;
          k = j
        } else {
          k -= 1;
        }
      }
    }
  }
  return ret;
};


var triangleNumber = function(nums) {
  let ret = 0;
  nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 2; i -= 1) {
    let l = 0;
    let r = i - 1;
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        ret += r - l;
        r -= 1;
      } else {
        l += 1;
      }
    }
  }
  return ret;
};