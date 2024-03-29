/* 
  给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

  示例 1:

  输入: root = [3,1,4,null,2], k = 1
    3
    / \
  1   4
    \
     2
  输出: 4
  示例 2:

  输入: root = [5,3,6,2,4,null,null,1], k = 3
        5
        / \
      3   6
      / \
    2   4
    /
  1
  输出: 4
   

  限制：

  1 ≤ k ≤ 二叉搜索树元素个数

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof
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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  const arr = [];
  dfs(root);
  return arr[arr.length - k];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  }
};

/**
 * 常规思路，二叉搜索树+中序遍历 = 递增排序
 */

var kthLargest = function(root, k) {
  let ret;
  dfs(root);
  return ret;

  function dfs(node) {
    if (!node || k === 0) return;
    dfs(node.right);
    if (--k === 0) ret = node.val;
    dfs(node.left);
  }
};

/**
 * 右子树优先
 */
