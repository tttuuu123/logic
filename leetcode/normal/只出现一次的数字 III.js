/* 
  给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。

  示例 :

  输入: [1,2,1,3,2,5]
  输出: [3,5]
  注意：

  结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
  你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/single-number-iii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let i = 0;
  const ret = [];
  while (i <= nums.length) {
    if (i === nums.length - 1) {
      ret.push(nums[i]);
      return ret;
    }
    if (nums[i] ^ nums[i + 1] === 0) {
      i += 2;
    } else {
      ret.push(nums[i]);
      i += 1;
    }
  }
  return ret;
};