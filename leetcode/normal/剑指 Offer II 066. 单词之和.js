/* 
  实现一个 MapSum 类，支持两个方法，insert 和 sum：

  MapSum() 初始化 MapSum 对象
  void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对将被替代成新的键值对。
  int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。

  示例：

  输入：
  inputs = ["MapSum", "insert", "sum", "insert", "sum"]
  inputs = [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
  输出：
  [null, null, 3, null, 5]

  解释：
  MapSum mapSum = new MapSum();
  mapSum.insert("apple", 3);  
  mapSum.sum("ap");           // return 3 (apple = 3)
  mapSum.insert("app", 2);    
  mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)

  提示：

  1 <= key.length, prefix.length <= 50
  key 和 prefix 仅由小写英文字母组成
  1 <= val <= 1000
  最多调用 50 次 insert 和 sum


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/z1R5dt
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.children = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let node = this.children;
  for (const char of key) {
    if (!node[char]) node[char] = {};
    node = node[char];
  }
  node.val = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let node = this.children;
  for (const char of prefix) {
    if (!node[char]) return 0;
    node = node[char];
  }
  let sum = 0;
  dfs(node);
  return sum;

  function dfs(node) {
    Object.keys(node).forEach((key) => {
      if (key === 'val') {
        sum += node[key];
      } else {
        dfs(node[key]);
      }
    })
  }
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */