/* 
  给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

  叶子节点 是指没有子节点的节点。

  示例 1：

  输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
  输出：[[5,4,11,2],[5,8,4,5]]
  示例 2：

  输入：root = [1,2,3], targetSum = 5
  输出：[]
  示例 3：

  输入：root = [1,2], targetSum = 0
  输出：[]
   

  提示：

  树中节点总数在范围 [0, 5000] 内
  -1000 <= Node.val <= 1000
  -1000 <= targetSum <= 1000

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof
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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
  const ret = [];
  dfs([], root, 0)
  return ret;

  function dfs(arr, node, sum) {
    if (!node) return;
    sum += node.val;
    arr.push(node.val);
    // 测试用例 节点 val 存在负数，所以不行
    // if (sum > target) {
    //   arr.pop();
    //   return;
    // };
    if (sum === target && !node.left && !node.right) {
      ret.push([...arr]);
      arr.pop();
      return;
    }
    dfs(arr, node.left, sum);
    dfs(arr, node.right, sum);
    arr.pop();
  }
};