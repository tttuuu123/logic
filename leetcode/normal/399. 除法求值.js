/* 
  给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。

  另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。

  返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。

  注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

  示例 1：

  输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
  输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
  解释：
  条件：a / b = 2.0, b / c = 3.0
  问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
  结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
  示例 2：

  输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
  输出：[3.75000,0.40000,5.00000,0.20000]
  示例 3：

  输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
  输出：[0.50000,2.00000,-1.00000,-1.00000]
   

  提示：

  1 <= equations.length <= 20
  equations[i].length == 2
  1 <= Ai.length, Bi.length <= 5
  values.length == equations.length
  0.0 < values[i] <= 20.0
  1 <= queries.length <= 20
  queries[i].length == 2
  1 <= Cj.length, Dj.length <= 5
  Ai, Bi, Cj, Dj 由小写英文字母与数字组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/evaluate-division
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const ins = new UnionSet(new Set(equations.flat()).size);
  const map = new Map();
  let id = 0;
  for (let i = 0; i < equations.length; i += 1) {
    const a = equations[i][0];
    const b = equations[i][1];
    if (!map.has(a)) {
      map.set(a, id);
      id += 1;
    }
    if (!map.has(b)) {
      map.set(b, id);
      id += 1;
    }
    ins.merge(map.get(a), map.get(b), values[i]);
  }
  const ret = [];
  for (const [a, b] of queries) {
    if (!map.has(a) || !map.has(b)) {
      ret.push(-1);
    } else {
      ret.push(ins.getConnectedValue(map.get(a), map.get(b)));
    }
  }
  return ret;
};

class UnionSet {
  constructor(n) {
    this.parent = {};
    this.weight = {};
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
      this.weight[i] = 1;
    }
  }

  get(a) {
    const origin = this.parent[a];
    if (isNaN(origin)) return null;
    if (origin === a) return a;
    this.parent[a] = this.get(origin);
    this.weight[a] *= this.weight[origin];
    return this.parent[a];
  }

  merge(a, b, value) {
    const fa = this.get(a);
    const fb = this.get(b);
    if (fa === fb) return;
    this.parent[fa] = fb;
    this.weight[fa] = this.weight[b] * value / this.weight[a];
  }

  getConnectedValue(a, b) {
    const fa = this.get(a);
    const fb = this.get(b);
    if (!fa || !fb || fa !== fb) return -1;
    return this.weight[a] / this.weight[b];
  }
}