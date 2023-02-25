/* 
  给定一个不含重复数字的整数数组 nums ，返回其 所有可能的全排列 。可以 按任意顺序 返回答案。

  示例 1：

  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  示例 2：

  输入：nums = [0,1]
  输出：[[0,1],[1,0]]
  示例 3：

  输入：nums = [1]
  输出：[[1]]
   

  提示：

  1 <= nums.length <= 6
  -10 <= nums[i] <= 10
  nums 中的所有整数 互不相同


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/VvJkup
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ret = [];
  dfs([], [...nums]);
  return ret;

  function dfs(arr, remainArr) {
    if (arr.length === nums.length) {
      ret.push(arr);
      return;
    }
    for (let i = 0; i < remainArr.length; i += 1) {
      const [num] = remainArr.splice(i, 1);
      dfs([...arr, num], remainArr);
      remainArr.splice(i, 0, num);
    }
  }
};

var permute = function(nums) {
  const ret = [];
  const visited = Array(nums.length).fill(false);
  dfs([]);
  return ret;

  function dfs(arr) {
    if (arr.length === nums.length) {
      ret.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i += 1) {
      if (visited[i]) continue;
      arr.push(nums[i]);
      visited[i] = true;
      dfs(arr);
      visited[i] = false;
      arr.pop();
    }
  }
};