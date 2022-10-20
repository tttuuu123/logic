/* 
  给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

  百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

  例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

  示例 1:

  输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
  输出: 3
  解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
  示例 2:

  输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
  输出: 5
  解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
   

  说明:

  所有节点的值都是唯一的。
  p、q 为不同节点且均存在于给定的二叉树中。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root.val === p.val || root.val === q.val) return root;
  const left = find(root.left, p, q);
  const right = find(root.right, p, q);
  if (left === right) return root;
  if (left > 0) return lowestCommonAncestor(root.left, p, q);
  return lowestCommonAncestor(root.right, p, q)

  function find(root, p, q) {
    if (!root) return 0;
    if (root.val === p.val || root.val === q.val) return 1 + find(root.left, p, q) + find(root.right, p, q);
    return find(root.left, p, q) + find(root.right, p, q);
  }
};

/**
 * 存在大量重复path，缓存一下
 */

const map = new Map();
var lowestCommonAncestor = function(root, p, q) {
  if (root.val === p.val || root.val === q.val) return root;
  const left = find(root.left, p, q);
  const right = find(root.right, p, q);
  if (left === right) return root;
  if (left > 0) return lowestCommonAncestor(root.left, p, q);
  return lowestCommonAncestor(root.right, p, q)

  function find(root, p, q) {
    if (!root) return 0;
    if (map.has(root)) return map.get(root);
    const val = find(root.left, p, q) + find(root.right, p, q);
    if (root.val === p.val || root.val === q.val) {
      map.set(root, val + 1);
      return val + 1;
    }
    map.set(root, val);
    return val;
  }
};

var lowestCommonAncestor = function(root, p, q) {
  let ret;
  dfs(root, p, q);
  return ret;

  function dfs(root, p, q) {
    if (!root) return false;
    const hasLeft = dfs(root.left, p, q);
    const hasRight = dfs(root.right, p, q);
    if ((hasLeft && hasRight) || ((root.val === p.val || root.val === q.val) && (hasLeft || hasRight))) {
      ret = root;
    }
    return hasLeft || hasRight || (root.val === p.val || root.val === q.val);
  }
};


var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  if (left) return left;
  if (right) return right;
};