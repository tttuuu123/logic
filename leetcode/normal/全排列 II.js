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
  链接：https://leetcode-cn.com/problems/permutations-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const ret = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
  help([]);
  return ret;

  function help(arr) {
    if (arr.length === len) {
      ret.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] === nums[i - 1]) continue;
      arr.push(nums[i]);
      nums.splice(i, 1);
      help(arr);
      nums.splice(i, 0, arr.pop());
    }
  }
};

/**
 * 一种是把用过的数字从nums中去掉，回溯时再复原
 * 
 * 另一种是维护一个<[]>used，和nums等长，初始均为false。遍历中将使用的数字下标置为true
 * 过滤条件就变为了 if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue
 * 即可保证每次填入的数一定是这个数所在重复数集合中「从左往右第一个未被填过的数字」
 * 同样的在回溯时要将used[i]复原为true
 */

var permuteUnique = function(nums) {
  const ret = [];
  nums.sort((a, b) => a - b);
  const used = new Array(nums.length).fill(false);
  help([]);
  return ret;

  function help(arr) {
    if(arr.length === nums.length) {
      ret.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i += 1) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
      arr.push(nums[i]);
      used[i] = true;
      help(arr);
      arr.pop();
      used[i] = false;
    }
  }
};
