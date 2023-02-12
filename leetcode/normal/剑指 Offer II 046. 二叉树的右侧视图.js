/* 
  给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

  示例 1:

  输入: [1,2,3,null,5,null,4]
  输出: [1,3,4]
  示例 2:

  输入: [1,null,3]
  输出: [1,3]
  示例 3:

  输入: []
  输出: []
   

  提示:

  二叉树的节点个数的范围是 [0,100]
  -100 <= Node.val <= 100 


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/WNC0Lk
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  const queue = [root];
  const ret = [];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (i === len - 1) ret.push(node.val);
    }
  }
  return ret;
};

/**
 * bfs
 */