/* 
  给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 
  示例：
  二叉树：[3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  返回其层次遍历结果：

  [
    [3],
    [9,20],
    [15,7]
  ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const result = [];
  const arr = [root];
  let len;
  while (arr.length) {
    const ret = [];
    len = arr.length;
    for (let i = 0; i < len; i += 1) {
      ret.push(arr[i].val);
      if (arr[i].left) arr.push(arr[i].left);
      if (arr[i].right) arr.push(arr[i].right);
    }
    arr.splice(0, len);
    result.push(ret);
  }
  return result;
};