/* 
  给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。

  示例 1：

  输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
  输出：15
  示例 2：

  输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
  输出：19

  提示：

  树中节点数目在范围 [1, 104] 之间。
  1 <= Node.val <= 100

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/deepest-leaves-sum
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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let maxDeep = 0;
  let ret = 0;
  find(root);
  return ret;

  function find(root, deep = 1) {
    if (!root) return;
    if (deep === maxDeep) ret += root.val;
    if (deep > maxDeep) {
      maxDeep = deep;
      ret = root.val;
    }
    find(root.left, deep + 1);
    find(root.right, deep + 1);
  }
};