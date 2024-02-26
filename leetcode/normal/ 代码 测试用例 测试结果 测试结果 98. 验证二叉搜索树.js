/* 
  给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

  有效 二叉搜索树定义如下：

  节点的左子树只包含 小于 当前节点的数。
  节点的右子树只包含 大于 当前节点的数。
  所有左子树和右子树自身必须也是二叉搜索树。
  

  示例 1：


  输入：root = [2,1,3]
  输出：true
  示例 2：


  输入：root = [5,1,4,null,null,3,6]
  输出：false
  解释：根节点的值是 5 ，但是右子节点的值是 4 。
  

  提示：

  树中节点数目范围在[1, 104] 内
  -231 <= Node.val <= 231 - 1
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
var isValidBST = function(root) {
  return help(root, -Infinity, Infinity);

  function help(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= Infinity) return false;
    return help(root.left, min, root.val) && help(root.right, root.val, max);
  }
};

var isValidBST = function(root) {
  const stack = [];
  let inorder = -Infinity;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
  return true;
}

/**
 * 二叉搜索树中序遍历的结果是单调递增的
 */