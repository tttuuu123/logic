/* 
  根据一棵树的前序遍历与中序遍历构造二叉树。

  注意:
  你可以假设树中没有重复的元素。

  例如，给出

  前序遍历 preorder = [3,9,20,15,7]
  中序遍历 inorder = [9,3,15,20,7]
  返回如下的二叉树：

      3
    / \
    9  20
      /  \
    15   7

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;
  let poi = 0;
  while (inorder[poi] !== preorder[0]) poi += 1;
  const lPreorder = preorder.slice(1, poi + 1);
  const lInorder = inorder.slice(0, poi);
  const rPreorder = preorder.slice(poi + 1);
  const rInorder = inorder.slice(poi + 1);
  const root = new TreeNode(preorder[0], buildTree(lPreorder, lInorder), buildTree(rPreorder, rInorder));
  return root;
};