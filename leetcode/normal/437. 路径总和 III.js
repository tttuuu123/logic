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
  链接：https://leetcode-cn.com/problems/path-sum-iii
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

// 双递归
var pathSum = function(root, targetSum) {
  if (!root) return 0;
  return dfs(root, targetSum) + pathSum(root?.left, targetSum) + pathSum(root?.right, targetSum);
};

function dfs(root, targetSum) {
  if (!root) return 0;
  const val = root.val === targetSum ? 1 : 0;
  return val + dfs(root.left, targetSum - root.val) + dfs(root.right, targetSum - root.val);
}

// 要注意，此题路径上的值可以是1,-1,1,-1，这样目标为0的就有4条


/**
 * 用前缀和来优化
 * key为前缀和，val为前缀和的数量
 */
var pathSum = function(root, targetSum) {
  const map = {};
  return dfs(root, 0)

  function dfs(root, sum) {
    if (!root) return 0;
    map[sum] || (map[sum] = 0);
    map[sum] += 1;
    const curSum = sum + root.val;
    let cnt = map[curSum - targetSum] || 0;
    cnt += dfs(root.left, curSum);
    cnt += dfs(root.right, curSum);
    map[sum] -= 1;
    return cnt;
  }
};

