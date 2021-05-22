/* 
  给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。

  只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 

  示例 1：

  输入：["a==b","b!=a"]
  输出：false
  解释：如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。
  示例 2：

  输入：["b==a","a==b"]
  输出：true
  解释：我们可以指定 a = 1 且 b = 1 以满足满足这两个方程。
  示例 3：

  输入：["a==b","b==c","a==c"]
  输出：true
  示例 4：

  输入：["a==b","b!=c","c==a"]
  输出：false
  示例 5：

  输入：["c==c","b==d","x!=z"]
  输出：true

  提示：

  1 <= equations.length <= 500
  equations[i].length == 4
  equations[i][0] 和 equations[i][3] 是小写字母
  equations[i][1] 要么是 '='，要么是 '!'
  equations[i][2] 是 '='

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/satisfiability-of-equality-equations
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

import UnionSet from '../../structure/Union-Set';
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const map = {};
  let count = 0;
  equations.forEach(str => {
    const [p1, p2, p3, p4] = str;
    if (!map[p1]) {
      map[p1] = count;
      count += 1;
    }
    if (!map[p4]) {
      map[p4] = count;
      count += 1;
    }
  });
  const ins = new UnionSet(count);
  equations.forEach(str => {
    const [p1, p2, _, p4] = str;
    if (p2 === '=') ins.merge(map[p1], map[p4]);
  });
  return !equations.some(str => {
    const [p1, p2, _, p4] = str;
    if (p2 === '!') return ins.get(map[p1]) === ins.get(map[p4]);
    return false;
  });
};

/**
 * 可以优化下
 * 把相等和不相等的equation分开到2个数组中
 * 并且可以直接维护一个26个元素（小写字母有26个）的并查集
 */

/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const ins = new UnionSet(26);
  const a = 'a'.charCodeAt();
  for (let str of equations) {
    if (str[1] === '!') continue;
    ins.merge(str[0].charCodeAt() - a, str[3].charCodeAt() - a);
  }
  for (let str of equations) {
    if (str[1] === '=') continue;
    if (ins.get(str[0].charCodeAt() - a) === ins.get(str[3].charCodeAt() - a)) return false;
  }
  return true;
};
