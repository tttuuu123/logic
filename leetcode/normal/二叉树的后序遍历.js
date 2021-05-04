/* 
  给定一个二叉树，返回它的 后序 遍历。

  示例:

  输入: [1,null,2,3]  
    1
      \
      2
      /
    3 

  输出: [3,2,1]
  进阶: 递归算法很简单，你可以通过迭代算法完成吗？

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
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
var postorderTraversal = function(root) {
  if (!root) return [];
  const ret = [];
  const nodeStack = [root];
  const statusStack = [0];
  let node = null;
  while (nodeStack.length) {
    const status = statusStack.pop();
    switch (status) {
      case 0: // 左
        statusStack.push(1);
        node = nodeStack[nodeStack.length - 1];
        if (node.left) {
          nodeStack.push(node.left);
          statusStack.push(0);
        }
        break;
      case 1: // 右
        statusStack.push(2);
        node = nodeStack[nodeStack.length - 1];
        if (node.right) {
          nodeStack.push(node.right);
          statusStack.push(0);
        }
        break;
      case 2: // 中
        ret.push(nodeStack.pop().val);
        break;
    }
  }
  return ret;
};

/**
 * 利用栈来解决一类问题的通用解体方法
 */