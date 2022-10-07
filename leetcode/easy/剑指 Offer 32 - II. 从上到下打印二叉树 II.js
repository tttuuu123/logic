/* 
  从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

  例如:
  给定二叉树: [3,9,20,null,null,15,7],

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
   

  提示：

  节点总数 <= 1000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
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
  const ret = [];
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    ret.push([]);
    for (let i = 0; i < len; i += 1) {
      const node = queue.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return ret;
};