/* 
  给定一个二叉搜索树的 根节点 root 和一个整数 k , 请判断该二叉搜索树中是否存在两个节点它们的值之和等于 k 。假设二叉搜索树中节点的值均唯一。

  示例 1：

  输入: root = [8,6,10,5,7,9,11], k = 12
  输出: true
  解释: 节点 5 和节点 7 之和等于 12
  示例 2：

  输入: root = [8,6,10,5,7,9,11], k = 22
  输出: false
  解释: 不存在两个节点值之和为 22 的节点
   

  提示：

  二叉树的节点个数的范围是  [1, 104].
  -104 <= Node.val <= 104
  root 为二叉搜索树
  -105 <= k <= 105


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/opLdQZ
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const arr = [];
  const stack = [];
  let cur = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    arr.push(cur.val);
    cur = cur.right;
  }
  let l = 0, r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === k) return true;
    if (sum < k) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return false;
};

/**
 * 中序遍历+迭代+双指针
 */

var findTarget = function(root, k) {
  const set = new Set();
  return dfs(root)

  function dfs(root) {
    if (!root) return false;
    if (set.has(k - root.val)) return true;
    set.add(root.val);
   
    return  dfs(root.left) || dfs(root.right);
  }
};

/**
 * dfs + 哈希表
 */