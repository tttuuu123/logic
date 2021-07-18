/* 
  给定一个有 N 个结点的二叉树的根结点 root，树中的每个结点上都对应有 node.val 枚硬币，并且总共有 N 枚硬币。

  在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。(移动可以是从父结点到子结点，或者从子结点移动到父结点。)。

  返回使每个结点上只有一枚硬币所需的移动次数。

  示例 1：

  输入：[3,0,0]
  输出：2
  解释：从树的根结点开始，我们将一枚硬币移到它的左子结点上，一枚硬币移到它的右子结点上。
  示例 2：



  输入：[0,3,0]
  输出：3
  解释：从根结点的左子结点开始，我们将两枚硬币移到根结点上 [移动两次]。然后，我们把一枚硬币从根结点移到右子结点上。
  示例 3：

  输入：[1,0,2]
  输出：2
  示例 4：

  输入：[1,0,0,null,3]
  输出：4
   

  提示：

  1<= N <= 100
  0 <= node.val <= N

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/distribute-coins-in-binary-tree
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
var distributeCoins = function(root) {
  let ret = 0;
  dfs(root);
  return ret;

  // 在root这个子树中产生的硬币流动总数
  function dfs(root) {
    if (!root) return 0;
    const L = dfs(root.left);
    const R = dfs(root.right);
    ret += Math.abs(L) + Math.abs(R);
    // 经过root的次数为
    // root本身的硬币数val，root的左子树流经root的数量L，root的右子树流经root的数量R
    // 总和再减去root本身要保留一个硬币的1
    return root.val + L + R - 1;
  }
};

