/* 
  在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

  如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

  我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

  只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

  示例 1：


  输入：root = [1,2,3,4], x = 4, y = 3
  输出：false
  示例 2：


  输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
  输出：true
  示例 3：

  输入：root = [1,2,3,null,4], x = 2, y = 3
  输出：false

  提示：

  二叉树的节点数介于 2 到 100 之间。
  每个节点的值都是唯一的、范围为 1 到 100 的整数。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/cousins-in-binary-tree
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const [deepX, parentX] = dfs(root, x);
  const [deepY, parentY] = dfs(root, y);
  return deepX === deepY && parentX !== parentY;

  function dfs(node, target) {
    if (!node) return [-1, null];
    if (node.val === target) return [0, null];
    let level;
    let tempNode;
    [level, tempNode] = dfs(node.left, target);
    // level为0，说明当前节点是父节点
    if (level === 0) return [level + 1, node];
    // level不为-1，且经过上一个判断其实也不为0，则必然是已经找到了target的父节点，直接传上去
    if (level != -1) return [level + 1, tempNode];
    [level, tempNode] = dfs(node.right, target);
    if (level === 0) return [level + 1, node];
    if (level != -1) return [level + 1, tempNode];
    return [-1, null];
  }
};

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let deepX;
  let deepY;
  let parentX;
  let parentY;

  const queue = [{
    node: root,
    parent: null,
    depth: 0
  }];
  while (queue.length) {
    if (parentX && parentY) break;
    const temp = queue.shift();
    if (temp.node.val === x) {
      deepX = temp.depth;
      parentX = temp.parent;
    }
    if (temp.node.val === y) {
      deepY = temp.depth;
      parentY = temp.parent;
    }
    if (temp.node.left) queue.push({
      node: temp.node.left,
      parent: temp.node,
      depth: temp.depth + 1
    });
    if (temp.node.right) queue.push({
      node: temp.node.right,
      parent: temp.node,
      depth: temp.depth + 1
    });
  }
  return deepX === deepY && parentX !== parentY;
};

