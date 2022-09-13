/* 
  给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

  示例 1：

  输入：nums = [1,1,2]
  输出：
  [[1,1,2],
  [1,2,1],
  [2,1,1]]
  示例 2：

  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
   

  提示：

  1 <= nums.length <= 8
  -10 <= nums[i] <= 10


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/permutations-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  const ret = [];
  dfs([], nums);
  return ret;

  function dfs(arr, remainArr) {
    if (arr.length === nums.length) {
      ret.push([...arr]);
      return;
    }
    for (let i = 0; i < remainArr.length; i += 1) {
      if (i > 0 && remainArr[i] === remainArr[i - 1]) continue;
      arr.push(remainArr[i]);
      const tempArr = [...remainArr];
      tempArr.splice(i, 1);
      dfs(arr, tempArr);
      arr.pop();
    }
  }
};