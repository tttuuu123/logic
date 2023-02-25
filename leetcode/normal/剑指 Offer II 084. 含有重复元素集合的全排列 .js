/* 
  给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。


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
  链接：https://leetcode.cn/problems/7p8L0Z
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const ret = [];
  nums.sort((a, b) => a - b);
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
      // nums[i] === nums[i - 1]这个条件会导致后续相同的数字直接被跳过
      // visited[i - 1] 如果是true，说明 i - 1这个元素用过了，那么i这个元素也可以用
      // 如果 i - 1 这个元素没用，那么i这个元素也不能用
      // [1, 1, 2] 举个例子
      // 当 i = 1 时候
      // 若visited[i - 1] = true，那么说明nums[0]被使用了，那么nums[1]也可以继续使用
      // 若visited[i - 1] = false，那么nums[1]使用就会重复
      // 核心就是相同的数字只有在第一个数字被使用的时候才能用
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
      arr.push(nums[i]);
      visited[i] = true;
      dfs(arr);
      visited[i] = false;
      arr.pop();
    }
  }
};