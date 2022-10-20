/* 
  输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

  示例 1:

  给定二叉树 [3,9,20,null,null,15,7]

      3
    / \
    9  20
      /  \
    15   7
  返回 true 。

  示例 2:

  给定二叉树 [1,2,2,3,3,null,null,4,4]

        1
        / \
      2   2
      / \
    3   3
    / \
  4   4
  返回 false 。

   

  限制：

  0 <= 树的结点个数 <= 10000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof
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
var isBalanced = function(root) {
  if (!root) return true;
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  }
  return false;

  function getDepth(root) {
    if (!root) return 0;
    const left = 1 + getDepth(root.left);
    const right = 1 + getDepth(root.right);
    return Math.max(left, right);
  }
};