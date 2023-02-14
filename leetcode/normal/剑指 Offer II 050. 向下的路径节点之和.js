/* 
  给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

  路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

  示例 1：

  输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
  输出：3
  解释：和等于 8 的路径有 3 条，如图所示。
  示例 2：

  输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
  输出：3
   
  提示:

  二叉树的节点个数的范围是 [0,1000]
  -109 <= Node.val <= 109 
  -1000 <= targetSum <= 1000 
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/6eUYwP
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  if (!root) return 0;
  return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};

function dfs(root, target) {
  if (!root) return 0;
  const val = target - root.val;
  // 因为 -109 <= Node.val <= 109  所以target为0时，仍要继续递归
  return (val === 0 ? 1 : 0) + dfs(root.left, val) + dfs(root.right, val);
}


var pathSum = function(root, targetSum) {
  const map = new Map();
  return dfs(root, 0);

  function dfs(root, preSum) {
    if (!root) return 0;
    map.set(preSum, map.has(preSum) ? map.get(preSum) + 1 : 1);
    const sum = preSum + root.val;
    let count = map.has(sum - targetSum) ? map.get(sum - targetSum) : 0;
    count += dfs(root.left, sum);
    count += dfs(root.right, sum);
    map.set(preSum, map.get(preSum) - 1);
    return count
  }
};

/**
 * 利用前缀和一次遍历 + 回溯
 * map以前缀和为key，val为出现次数
 * 有 根节点到当前节点的前缀和 curSum，目标 targetSum
 * 若 map中存在 map[curSum - targetSum] > 0
 * 那么说明存在map[curSum - targetSum] 个解
 */
