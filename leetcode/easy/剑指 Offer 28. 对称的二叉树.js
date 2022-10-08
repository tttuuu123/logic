/* 
  请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

  例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

      1
     / \
    2   2
   / \ / \
  3  4 4  3
  但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

      1
     / \
    2   2
     \   \
     3    3

  示例 1：

  输入：root = [1,2,2,3,4,4,3]
  输出：true
  示例 2：

  输入：root = [1,2,2,null,3,null,3]
  输出：false
   

  限制：

  0 <= 节点个数 <= 1000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  const arr = [root.left, root.right];
  while (arr.length) {
    const u = arr.shift();
    const v = arr.shift();
    if (!u && !v) continue;
    if (!u || !v) return false;
    if (u.val !== v.val) return false;
    arr.push(u.left);
    arr.push(v.right);
    arr.push(u.right);
    arr.push(v.left);
  }
  return true;
};

var isSymmetric = function(root) {
  if (!root) return true;
  return isSame(root.left, root.right);
}

function isSame(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.val === b.val && isSame(a.left, b.right) && isSame(a.right, b.left);
}

/**
 * 分别用BFS和DFS
 */