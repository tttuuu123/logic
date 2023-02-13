/* 
  给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。

  节点 node 的子树为 node 本身，以及所有 node 的后代。

  示例 1:

  输入: [1,null,0,0,1]
  输出: [1,null,0,null,1] 
  解释: 
  只有红色节点满足条件“所有不包含 1 的子树”。
  右图为返回的答案。


  示例 2:

  输入: [1,0,1,0,0,0,1]
  输出: [1,null,1,null,1]
  解释: 


  示例 3:

  输入: [1,1,0,1,1,0,1,0]
  输出: [1,1,0,1,1,null,1]
  解释: 


  提示:

  二叉树的节点个数的范围是 [1,200]
  二叉树节点的值只会是 0 或 1

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/pOCWxh
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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  const canDelRoot = dfs(root);
  return canDelRoot ? null : root;

  function dfs(root) {
    // 为了最后一个return判断方便，没有root，依然判断canDel为true
    if (!root) return true;
    const canDelLeft = dfs(root.left);
    if (canDelLeft) root.left = null;
    const canDelRight = dfs(root.right);
    if (canDelRight) root.right = null;
    return root.val === 0 && canDelLeft && canDelRight;
  }
};

var pruneTree = function(root) {
  if (!root) return null;
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (root.val === 0 && !root.left && !root.right) return null;
  return root;
};

/**
 * 都是dfs，下面代码简化版
 */