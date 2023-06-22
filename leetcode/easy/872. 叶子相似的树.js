/* 
  请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

  举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。

  如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

  如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

  示例 1：

  输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
  输出：true
  示例 2：

  输入：root1 = [1,2,3], root2 = [1,3,2]
  输出：false
   

  提示：

  给定的两棵树结点数在 [1, 200] 范围内
  给定的两棵树上的值在 [0, 200] 范围内

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/leaf-similar-trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const arr1 = dfs(root1, []);
  const arr2 = dfs(root2, []);
  if (arr1.length !== arr2.length) return false;
  for (const i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;

  function dfs(root, arr) {
    if (!root) return arr;
    if (!root.left && !root.right) {
      arr.push(root.val);
      return arr;
    }
    if (root.left) dfs(root.left, arr);
    if (root.right) dfs(root.right, arr);
    return arr;
  }
};

var leafSimilar = function(root1, root2) {
  const arr1 = [];
  dfs(root1, arr1);;
  const arr2 = [];
  dfs(root2, arr2);
  if (arr1.length !== arr2.length) return false;
  for (const i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;

  function dfs(root, arr) {
    if (!root.left && !root.right) {
      arr.push(root.val);
    } else {
      if (root.left) dfs(root.left, arr);
      if (root.right) dfs(root.right, arr);
    }
  }
};

var leafSimilar = function(root1, root2) {
  const arr1 = run(root1);
  const arr2 = run(root2);
  if (arr1.length !== arr2.length) return false;
  for (const i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;

  function run(root) {
    const stack = [];
    let cur = root;
    const arr = [];
    while (stack.length || cur) {
      while (cur) {
        stack.push(cur);
        cur = cur.left;
      }
      cur = stack.pop();
      if (!cur.left && !cur.right) {
        arr.push(cur.val);
      }
      cur = cur.right;
    }
    return arr;
  }
};