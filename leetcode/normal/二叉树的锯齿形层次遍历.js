/* 
  给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

  例如：
  给定二叉树 [3,9,20,null,null,15,7],

     3
    / \
   9  20
      /  \
     15   7
  返回锯齿形层次遍历如下：

  [
    [3],
    [20,9],
    [15,7]
  ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
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
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const queue = [root];
  const ret = [];
  let len;
  let flag = true;
  let temp;
  while (queue.length > 0) {
    ret.push([]);
    len = queue.length;
    for (let i = 0; i < len; i += 1) {
      temp = queue.shift();
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
      if (!flag) {
        ret[ret.length - 1].unshift(temp.val);
      } else {
        ret[ret.length - 1].push(temp.val);
      }
    }
    flag = !flag;
  }
  return ret;
};