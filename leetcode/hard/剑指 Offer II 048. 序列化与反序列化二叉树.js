/* 
  序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

  请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

  示例 1：

  输入：root = [1,2,3,null,null,4,5]
  输出：[1,2,3,null,null,4,5]
  示例 2：

  输入：root = []
  输出：[]
  示例 3：

  输入：root = [1]
  输出：[1]
  示例 4：

  输入：root = [1,2]
  输出：[1,2]
   

  提示：

  输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，也可以采用其他的方法解决这个问题。
  树中结点数在范围 [0, 104] 内
  -1000 <= Node.val <= 1000


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/h54YBf
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
  const queue = [root];
  const arr = [];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const node = queue.shift();
      if (!node) {
        arr.push(null);
      } else {
        arr.push(node.val);
        queue.push(node.left ? node.left : null);
        queue.push(node.right ? node.right : null);
      }
    }
  }
  return JSON.stringify(arr);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const arr = JSON.parse(data);
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  let idx = 1;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    node.left = null;
    node.right = null;
    if (arr[idx] !== null) {
      node.left = new TreeNode(arr[idx]);
      queue.push(node.left);
    }
    idx += 1;
    if (arr[idx] !== null) {
      node.right = new TreeNode(arr[idx]);
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