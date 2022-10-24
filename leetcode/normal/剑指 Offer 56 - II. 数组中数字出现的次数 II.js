/* 
  在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

  示例 1：

  输入：nums = [3,4,3,3]
  输出：4
  示例 2：

  输入：nums = [9,1,7,9,7,9,7]
  输出：1
   

  限制：

  1 <= nums.length <= 10000
  1 <= nums[i] < 2^31
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const arr = Array(32).fill(0);
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < 32; j += 1) {
      arr[j] += (nums[i] >> (31 - j)) & 1;
      arr[j] %= 3;
    } 
  }
  let ret = 0;
  for (let i = 0; i < arr.length; i += 1) {
    ret = (ret << 1) + arr[i];
  }
  return ret;
};