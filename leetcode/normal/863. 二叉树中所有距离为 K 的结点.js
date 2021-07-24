/* 
  给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。

  返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。

  示例 1：

  输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
  输出：[7,4,1]
  解释：
  所求结点为与目标结点（值为 5）距离为 2 的结点，
  值分别为 7，4，以及 1

  注意，输入的 "root" 和 "target" 实际上是树上的结点。
  上面的输入仅仅是对这些对象进行了序列化描述。
   

  提示：

  给定的树是非空的。
  树上的每个结点都具有唯一的值 0 <= node.val <= 500 。
  目标结点 target 是树上的结点。
  0 <= K <= 1000.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree
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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  const ret = [];
  find(root, 0);
  return ret;

  function find(node) {
    if (!node) return;
    if (node === target) {
      // 处理目标节点往下的所有节点
      dfs(node, k);
      return 1;
    }
    let diff = find(node.left);
    // 若根节点与目标节点距离为k
    if (diff === k) {
      ret.push(node.val);
      return;
    }
    // 若根节点与目标节点距离为k - diff
    // 且目标节点位于根节点的左子树上
    if (diff > 0) {
      dfs(node.right, k - diff - 1);
      return diff + 1;
    }
    diff = find(node.right);
    if (diff === k) {
      ret.push(node.val);
      return;
    }
    if (diff > 0) {
      dfs(node.left, k - diff - 1);
      return diff + 1;;
    }
    
  }

  function dfs(node, level) {
    if (!node) return;
    if (level === 0) {
      ret.push(node.val);
      return;
    }
    dfs(node.left, level - 1);
    dfs(node.right, level - 1);
  }
};