/* 
  给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
 
  示例 1：

  输入：nums = [10,5,2,6], k = 100
  输出：8
  解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
  需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
  示例 2：

  输入：nums = [1,2,3], k = 0
  输出：0
   

  提示: 

  1 <= nums.length <= 3 * 104
  1 <= nums[i] <= 1000
  0 <= k <= 106


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/subarray-product-less-than-k
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let ret = 0;
  let count = 1;
  for (let i = 0, j = 0; i < nums.length; i += 1) {
    count *= nums[i];
    /**
     * [1,2,3]
     * 0
     * 
     * 类似这样的需要条件 j <= i 来辅助判断
     */
    while (count >= k && j <= i) {
      count /= nums[j];
      j += 1;
    }
    ret += i - j + 1;
  }
  return ret;
};

/**
 * 只要区间[j, i] 的乘积满足条件，那么区间[j, i]内所有子数组一定满足条件
 * 那么区间[j, i]内以右边届i为结尾的子数组数量为 i - j + 1
 * 同理，每个满足条件的区间都以右边界为基准来计算子数组数量
 */