/* 
  给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

  示例1：

  输入: root = [1,3,2,5,3,null,9]
  输出: [1,3,9]
  解释:
            1
          / \
          3   2
        / \   \  
        5   3   9 
  示例2：

  输入: root = [1,2,3]
  输出: [1,3]
  解释:
            1
          / \
          2   3
  示例3：

  输入: root = [1]
  输出: [1]
  示例4：

  输入: root = [1,null,2]
  输出: [1,2]
  解释:      
             1 
              \
               2     
  示例5：

  输入: root = []
  输出: []
   

  提示：

  二叉树的节点个数的范围是 [0,104]
  -231 <= Node.val <= 231 - 1


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/hPov7L
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
var largestValues = function(root) {
  if (!root) return [];
  const queue = [root];
  const ret = [];
  while (queue.length) {
    const len = queue.length;
    let max = -Infinity;
    for (let i = 0; i < len; i += 1) {
      const node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ret.push(max);
  }
  return ret;
};