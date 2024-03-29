/* 
  给定一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。

  每条从根节点到叶节点的路径都代表一个数字：

  例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
  计算从根节点到叶节点生成的 所有数字之和 。

  叶节点 是指没有子节点的节点。


  示例 1：


  输入：root = [1,2,3]
  输出：25
  解释：
  从根到叶子节点路径 1->2 代表数字 12
  从根到叶子节点路径 1->3 代表数字 13
  因此，数字总和 = 12 + 13 = 25
  示例 2：


  输入：root = [4,9,0,5,1]
  输出：1026
  解释：
  从根到叶子节点路径 4->9->5 代表数字 495
  从根到叶子节点路径 4->9->1 代表数字 491
  从根到叶子节点路径 4->0 代表数字 40
  因此，数字总和 = 495 + 491 + 40 = 1026
   

  提示：

  树中节点的数目在范围 [1, 1000] 内
  0 <= Node.val <= 9
  树的深度不超过 10

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/3Etpl5
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
 * @return {number}
 */
var sumNumbers = function(root) {
  const arr = [];
  const queue = [{
    node: root,
    val: '' + root.val,
  }];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const data = queue.shift();
      if (data.node.left) {
        queue.push({
          node: data.node.left,
          val: data.val + data.node.left.val,
        });
      }
      if (data.node.right) {
        queue.push({
          node: data.node.right,
          val: data.val + data.node.right.val
        });
      }
      if (!data.node.left && !data.node.right) {
        arr.push(data.val);
      }
    }
  }
  return arr.reduce((sum, num) => sum += +num, 0);
};

/**
 * BFS
 */


var sumNumbers = function(root) {
  return dfs(root, 0);

  function dfs(root, prevSum) {
    if (!root) return 0;
    const sum = prevSum * 10 + root.val;
    if (!root.left && !root.right) {
      return sum;
    }
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
}

/**
 * DFS
 */