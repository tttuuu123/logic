/* 
  给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

  示例 :
  给定二叉树

           1
          / \
         2   3
        / \     
       4   5    
  返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

   

  注意：两结点之间的路径长度是以它们之间边的数目表示。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/diameter-of-binary-tree
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let max = 0;

  function deep(root) {
    if (!root) return 0;
    const left = root.left ? deep(root.left) + 1 : 0;
    const right = root.right ? deep(root.right) + 1 : 0;
    max = Math.max(max, left + right);
    return Math.max(left, right);
  }

  deep(root);
  return max;
};

/**
 * 上面的解法好理解
 * 以left为例，
 * deep(root.left)求得了左子树的高度
 * 如果左子树存在，则左子树到root，还有一个1
 * 如果不存在，就是0
 * 
 * 下面的解法也是一个道理
 * 只不过在最后一步Math.max(left, right) + 1
 * 取出左右子树的最大深度，再加上到root的1
 */

var diameterOfBinaryTree = function(root) {
  let max = 0;

  function deep(root) {
    if (!root) return 0;
    const left = deep(root.left);
    const right = deep(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }

  deep(root);
  return max;
};

