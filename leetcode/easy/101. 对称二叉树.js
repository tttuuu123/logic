/* 
  给你一个二叉树的根节点 root ， 检查它是否轴对称。

  示例 1：

  输入：root = [1,2,2,3,4,4,3]
  输出：true
  示例 2：

  输入：root = [1,2,2,null,3,null,3]
  输出：false
  

  提示：

  树中节点数目在范围 [1, 1000] 内
  -100 <= Node.val <= 100
  

  进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  return dfs(root.left, root.right);
  

  function dfs(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }
};

var isSymmetric = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  const queue = [root.left, root.right];
  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }
  return true;
}