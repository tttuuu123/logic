/* 
  给定一棵二叉搜索树和其中的一个节点 p ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。

  节点 p 的后继是值比 p.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 p 的下一个节点。

  示例 1：

  输入：root = [2,1,3], p = 1
  输出：2
  解释：这里 1 的中序后继是 2。请注意 p 和返回值都应是 TreeNode 类型。
  示例 2：

  输入：root = [5,3,6,2,4,null,null,1], p = 6
  输出：null
  解释：因为给出的节点没有中序后继，所以答案就返回 null 了。

  提示：

  树中节点的数目在范围 [1, 104] 内。
  -105 <= Node.val <= 105
  树中各节点的值均保证唯一。


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/P5rCT8
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  let node = null;
  let flag = false;
  dfs(root);
  return node;

  function dfs(root) {
    if (!root) return;
    if (dfs(root.left)) return true;
    if (flag) {
      node = root;
      return true;
    }
    if (root.val === p.val) flag = true;
    if (dfs(root.right)) return true;
  }
};

/**
 * 递归 中序遍历，二叉搜索树中序遍历一定是递增的
 * 如果找到p节点，将flag置为true，那么下一个节点一定是答案
 */

var inorderSuccessor = function(root, p) {
  const stack = [];
  let cur = root;
  let prev = null;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (prev && (prev.val === p.val)) return cur;
    prev = cur;
    cur = cur.right;
  }
  return null;
};

/**
 * 循环版本的中序遍历
 */