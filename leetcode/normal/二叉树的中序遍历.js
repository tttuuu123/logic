/* 
  给定一个二叉树，返回它的中序 遍历。

  示例:

  输入: [1,null,2,3]
    1
      \
       2
      /
    3

  输出: [1,3,2]
  进阶: 递归算法很简单，你可以通过迭代算法完成吗？

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const stack = [];
  const ret = [];
  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    ret.push(root.val);
    root = root.right;
  }
  return ret;
};

/**
 * 上面是迭代的方式
 * 下面是递归
 */
var inorderTraversal = function(root) {
  let res = [];
  helper(root, res);
  return res;
};

function helper(root, res) {
  if (!root) return;
  if (root.left) helper(root.left, res);
  res.push(root.val);
  if (root.right) helper(root.right, res);
}

/**
 * 颜色标记法
 * 使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。
 * 如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。
 * 如果遇到的节点为灰色，则将节点的值输出。
 */
var inorderTraversal = function(root) {
  const stack = [{
    col: 0,
    root,
  }];
  const res = [];
  while (stack.length) {
    const { col, root } = stack.pop();
    if (!root) continue;
    if (col === 0) {
      stack.push({
        col: 0,
        root: root.right,
      });
      stack.push({
        col: 1,
        root,
      });
      stack.push({
        col: 0,
        root: root.left,
      });
    } else {
      res.push(root.val);
    }
  }
  return res;
};

/**
 * 可以看到入栈顺序是右、中、左
 * 因为中序遍历要求的是左、中、右
 * 而栈是先进后出的结构，
 * 所以入栈顺序是右、中、左
 * 出栈顺序就是左、中、右
 * 这种方法对先序、中序、后序都可以处理，仅调整入栈顺序
 */