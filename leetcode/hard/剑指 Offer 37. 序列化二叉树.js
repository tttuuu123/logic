/* 
  请实现两个函数，分别用来序列化和反序列化二叉树。

  你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

  提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

  示例：

  输入：root = [1,2,3,null,null,4,5]
  输出：[1,2,3,null,null,4,5]
   

  注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/



  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return JSON.stringify([]);
  const list = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    while (len > 0) {
      const node = queue.shift();
      len -= 1;
      if (!node) {
        list.push(null);
      } else {
        list.push(node.val);
        node.left ? queue.push(node.left) : queue.push(null);
        node.right ? queue.push(node.right) : queue.push(null);
      }
    }
  }
  return JSON.stringify(list);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = JSON.parse(data);
  if (list.length === 0) return null;
  const root = new TreeNode(list[0]);
  let idx = 1;
  let queue = [root];
  while (queue.length) {
    const node = queue.shift();
    node.left = null;
    node.right = null;
    if (list[idx] !== null) {
      node.left = new TreeNode(list[idx]);
      queue.push(node.left);
    }
    idx += 1;
    if (list[idx] !== null) {
      node.right = new TreeNode(list[idx]);
      queue.push(node.right);
    }
    idx += 1;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */