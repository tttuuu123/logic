/* 
  输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

  假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

  示例 1:


  Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
  Output: [3,9,20,null,null,15,7]
  示例 2:

  Input: preorder = [-1], inorder = [-1]
  Output: [-1]
   
  限制：

  0 <= 节点个数 <= 5000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;
  const root = preorder[0];
  const idx = inorder.indexOf(root);
  const node = new TreeNode(root);
  if (idx !== 0) {
    node.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx));
  }
  if (idx !== preorder.length - 1) {
    node.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1));
  }
  return node;
};