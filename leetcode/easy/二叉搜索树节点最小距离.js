/*

    给定一个二叉搜索树的根节点 root，返回树中任意两节点的差的最小值。

    示例：

    输入: root = [4,2,6,1,3,null,null]
    输出: 1
    解释:
    注意，root是树节点对象(TreeNode object)，而不是数组。
    
    给定的树 [4,2,6,1,3,null,null] 可表示为下图:

            4
            /   \
        2      6
        / \    
        1   3  

    最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
     

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes
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
var minDiffInBST = function(root) {
	let min = Infinity;
	return min;

	function run(root, val) {
		if (!root) return;
		min = Math.min(Math.abs(root.val - val), min);
		run(root.left, root.val);
		run(root.rigth, root.val);
	}
};