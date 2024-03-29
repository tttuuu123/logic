/* 
  有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

  省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

  给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

  返回矩阵中 省份 的数量。

  示例 1：

  输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
  输出：2
  示例 2：

  输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
  输出：3

  提示：

  1 <= n <= 200
  n == isConnected.length
  n == isConnected[i].length
  isConnected[i][j] 为 1 或 0
  isConnected[i][i] == 1
  isConnected[i][j] == isConnected[j][i]


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/number-of-provinces
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const cities = new UnionSet(isConnected.length);
  for (let i = 0; i < isConnected.length; i += 1) {
    for (let j = 0; j < isConnected[0].length; j += 1) {
      if (isConnected[i][j]) cities.merge(i, j);
    }
  }
  let ret = 0;
  for (let i = 0; i < isConnected.length; i += 1) {
    if (cities.get(i) === i) ret += 1;
  }
  return ret;
};

class UnionSet {
  constructor(n) {
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  get(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.get(this.parent[x]);
    }
    return this.parent[x];
  }

  merge(i, j) {
    const fa = this.get(i);
    const fb = this.get(j);
    if (fa === fb) return;
    this.parent[fa] = fb;
    this.size[fb] += this.size[fa];
  }

  size(x) {
    return this.size[this.get(x)];
  }
}

/**
 * 并查集就是专门做这种题的
 */

var findCircleNum = function(isConnected) {
  const set = new Set();
  let ret = 0;
  for (let i = 0; i < isConnected.length; i += 1) {
    if (!set.has(i)) {
      ret += 1;
      dfs(i);
    }
  }
  return ret;

  function dfs(i) {
    for (let j = 0; j < isConnected.length; j += 1) {
      if (isConnected[i][j] === 1 && !set.has(j)) {
        set.add(j);
        dfs(j);
      }
    }
  }
}

/**
 * dfs+递归
 */