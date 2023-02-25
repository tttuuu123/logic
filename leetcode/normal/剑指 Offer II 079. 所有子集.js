/* 
  给定一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

  解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
   

  示例 1：

  输入：nums = [1,2,3]
  输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
  示例 2：

  输入：nums = [0]
  输出：[[],[0]]
   

  提示：

  1 <= nums.length <= 10
  -10 <= nums[i] <= 10
  nums 中的所有元素 互不相同

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/TVdhkn
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const ret = [];
  dfs([], 0);
  return ret;

  function dfs(arr, idx) {
    ret.push([...arr]);
    if (idx === nums.length) return;
    for (let i = idx; i < nums.length; i += 1) {
      arr.push(nums[i]);
      dfs(arr, i + 1);
      arr.pop();
    }
  }
};

var subsets = function(nums) {
  const ret = [];
  dfs([], 0);
  return ret;

  function dfs(arr, idx) {
    if (idx === nums.length) {
      ret.push([...arr]);
      return;
    }
    arr.push(nums[idx]);
    dfs(arr, idx + 1);
    arr.pop();
    dfs(arr, idx + 1);
  }
};

/**
 * 本质就是一个用当前元素，不用当前元素的问题
 */