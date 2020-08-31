/* 
  翻转一棵二叉树。

  示例：

  输入：

      4
    /   \
   2     7
  / \   / \
 1   3 6   9
  输出：

      4
    /   \
   7     2
  / \   / \
 9   6 3   1

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/invert-binary-tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  reverse(root);
  return root;
};

function reverse(root) {
  if (!root) return;
  reverse(root.left);
  reverse(root.right);
  const left = root.left;
  const right = root.right;
  root.left = right;
  root.right = left;
}

/* 优化，但实际跑出来时间和上面没区别 */
var invertTree = function(root) {
  if (!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};