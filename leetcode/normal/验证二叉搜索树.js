/* 
  给定一个二叉树，判断其是否是一个有效的二叉搜索树。

  假设一个二叉搜索树具有如下特征：

  节点的左子树只包含小于当前节点的数。
  节点的右子树只包含大于当前节点的数。
  所有左子树和右子树自身必须也是二叉搜索树。
  示例 1:

  输入:
     2
    / \
   1   3
  输出: true
  示例 2:

  输入:
     5
    / \
   1   4
      / \
     3   6
  输出: false
  解释: 输入为: [5,1,4,null,null,3,6]。
       根节点的值为 5 ，但是其右子节点值为 4 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/validate-binary-search-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return helper(root, -Infinity, Infinity);
};

function helper(root, left, right) {
  if (!root) return true;
  if (root.val <= left || root.val >= right) return false;
  return helper(root.left, left, root.val) && helper(root.right, root.val, right);
}

/* 中序遍历 */
var isValidBST = function(root) {
  const stack = [];
  let inorder = -Infinity;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;
};

/**
 * 中序遍历的结果集必然是升序的
 */
