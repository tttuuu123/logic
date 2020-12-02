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
	const vals = {};
	run(root);
	const sortedVals = Object.keys(vals);
	let min = Infinity;
	for (let i = 1; i < sortedVals.length; i += 1) {
		min = Math.min(min, sortedVals[i] - sortedVals[i - 1]);
	}
	return min;
	function run(root) {
		if (!root) return;
		vals[+root.val] = 1;
		run(root.left);
		run(root.right);
	}
};