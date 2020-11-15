/* 
  给定一个 没有重复 数字的序列，返回其所有可能的全排列。

  示例:

  输入: [1,2,3]
  输出:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
  通过次数218,258提交次数282,875

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/permutations
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ret = [];
  run([], [...nums]);
  return ret;

  function run(arr, remainArr) {
    if (arr.length === nums.length) {
      ret.push(arr);
      return;
    }

    for (let i = 0; i < remainArr.length; i += 1) {
      const temp = [...remainArr];
      const [num] = temp.splice(i, 1);
      run([...arr, num], temp);
    }
  }
};