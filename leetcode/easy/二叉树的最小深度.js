/* 
  给定一个二叉树，找出其最小深度。

  最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

  说明: 叶子节点是指没有子节点的节点。

  示例:

  给定二叉树 [3,9,20,null,null,15,7],

     3
    / \
   9   20
      /  \
    15    7
  返回它的最小深度  2.

  通过次数106,083提交次数244,794

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
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
 * @return {number}
 */
var minDepth = function(root) {
  return dep(root, 0)
};

function dep(root, depth) {
  if (!root) return depth;
  return Math.min(dep(root.left, depth + 1), dep(root.right, depth + 1))
}

/**
 * eg: [1, 2]
 * 答案中定义的是2
 * 就是说要 没有子节点的节点 才计算深度
 */
var minDepth = function(root) {
  if (!root) return 0;
  if (root.left && root.right) return dep(root, 0);
  if (root.left) return dep(root.left, 1);
  if (root.right) return dep(root.right, 1);
  return 1;
};

function dep(root, depth) {
  if (!root) return depth;
  if (root.left && root.right) return Math.min(dep(root.left, depth + 1), dep(root.right, depth + 1));
  if (root.left) return dep(root.left, depth + 1);
  if (root.right) return dep(root.right, depth + 1);
  return depth + 1;
}

/**
 * 毫无疑问，可以优化减少代码行数
 */
var minDepth = function(root) {
  return dep(root, 0);
};

function dep(root, depth) {
  if (!root) return depth;
  if (root.left && root.right) return Math.min(dep(root.left, depth + 1), dep(root.right, depth + 1));
  if (root.left) return dep(root.left, depth + 1);
  if (root.right) return dep(root.right, depth + 1);
  return depth + 1;
}