/* 
  完全二叉树是每一层（除最后一层外）都是完全填充（即，节点数达到最大，第 n 层有 2n-1 个节点）的，并且所有的节点都尽可能地集中在左侧。

  设计一个用完全二叉树初始化的数据结构 CBTInserter，它支持以下几种操作：

  CBTInserter(TreeNode root) 使用根节点为 root 的给定树初始化该数据结构；
  CBTInserter.insert(int v)  向树中插入一个新节点，节点类型为 TreeNode，值为 v 。使树保持完全二叉树的状态，并返回插入的新节点的父节点的值；
  CBTInserter.get_root() 将返回树的根节点。

  示例 1：

  输入：inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
  输出：[null,1,[1,2]]
  示例 2：

  输入：inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
  输出：[null,3,4,[1,2,3,4,5,6,7,8]]

  提示：

  最初给定的树是完全二叉树，且包含 1 到 1000 个节点。
  每个测试用例最多调用 CBTInserter.insert  操作 10000 次。
  给定节点或插入节点的每个值都在 0 到 5000 之间。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/NaqhDT
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
 */
var CBTInserter = function(root) {
  this.root = root;
  this.canInsertChildNodeQueue = [];
  const queue = [root];
  // 广度遍历，找到所有插入子节点的节点
  while (queue.length) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    if (!node.left || !node.right) this.canInsertChildNodeQueue.push(node);
  }
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
  const childNode = new TreeNode(v);
  const parentNode = this.canInsertChildNodeQueue[0];
  if (!parentNode.left) {
    parentNode.left = childNode;
  } else {
    parentNode.right = childNode;
    this.canInsertChildNodeQueue.shift();
  }
  this.canInsertChildNodeQueue.push(childNode);
  return parentNode.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */