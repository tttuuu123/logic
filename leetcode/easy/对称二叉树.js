
/* 
    给定一个二叉树，检查它是否是镜像对称的。

    例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

       1
      / \
     2   2
    / \ / \
   3  4 4  3
     

    但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

      1
     / \
    2   2
     \   \
      3    3

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/symmetric-tree
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
 * @return {boolean}
 */
/* DFS */
var isSymmetric = function(root) {
    if (!root) return true;
    return check(root.left, root.right);
};

function check(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
}

/* BFS */
var isSymmetric = function(root) {
    if (!root) return true;
    let arr = [root.left, root.right];
    let left;
    let right;
    while (arr.length) {
        left = arr.shift();
        right = arr.shift();
        if (!left && !right) continue;
        if (!left || !right) return false;
        if (left.val === right.val) {
            arr.push(left.left, right.right);
            arr.push(left.right, right.left);
        } else {
            return false;
        }
    }
    return true;
};

/**
 * 依次比较左子树的左子树和右子树的右子树，左子树的右子树和右子树的左子树是否相等
 * 注意一个root根节点不存在的场景
 */
