/* 
  给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

  示例 1:

  输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
  输出：[3,9,20,null,null,15,7]
  示例 2:

  输入：inorder = [-1], postorder = [-1]
  输出：[-1]

  提示:

  1 <= inorder.length <= 3000
  postorder.length == inorder.length
  -3000 <= inorder[i], postorder[i] <= 3000
  inorder 和 postorder 都由 不同 的值组成
  postorder 中每一个值都在 inorder 中
  inorder 保证是树的中序遍历
  postorder 保证是树的后序遍历
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return help(inorder, postorder);

  function help(inorder, postorder) {
    if (!inorder.length) return null;
    if (inorder.length === 0) return new TreeNode(inorder[0]);
    const rootVal = postorder[postorder.length - 1];
    const root = new TreeNode(rootVal);
    const mid = inorder.findIndex((num) => num === rootVal);
    root.left = help(inorder.slice(0, mid), postorder.slice(0, mid));
    root.right = help(inorder.slice(mid + 1), postorder.slice(mid, postorder.length - 1));
    return root;
  }
};

/**
 * 中序遍历
 * [[左子树的中序遍历结果], 根节点, [右子树的中序遍历结果]]
 * 
 * 后序遍历
 * [[左子树的中序遍历结果], [右子树的中序遍历结果], 根节点]
 */

var buildTree = function(inorder, postorder) {
  const map = {};
  for (let i = 0; i < inorder.length; i += 1) {
    map[inorder[i]] = i;
  }
  return help(0, inorder.length - 1, 0, postorder.length - 1);

  function help(inorderStart, inorderEnd, postorderStart, postorderEnd) {
    if (inorderStart > inorderEnd) return null;
    const rootVal = postorder[postorderEnd];
    const mid = map[rootVal];
    const leftTreeCount = mid - inorderStart;
    const root = new TreeNode(rootVal);
    root.left = help(inorderStart, mid - 1, postorderStart, postorderStart + leftTreeCount - 1);
    root.right = help(mid + 1, inorderEnd, postorderStart + leftTreeCount - 1 + 1, postorderEnd - 1);
    return root;
  }
};
