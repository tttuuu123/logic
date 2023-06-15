/* 
  给你一个下标从 0 开始、大小为 n x n 的整数矩阵 grid ，返回满足 Ri 行和 Cj 列相等的行列对 (Ri, Cj) 的数目。

  如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。

  示例 1：

  输入：grid = [[3,2,1],[1,7,6],[2,7,7]]
  输出：1
  解释：存在一对相等行列对：
  - (第 2 行，第 1 列)：[2,7,7]
  示例 2：

[3,1,2,2]
[1,4,4,5]
[2,4,2,2]
[2,4,2,2]

  输入：grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
  输出：3
  解释：存在三对相等行列对：
  - (第 0 行，第 0 列)：[3,1,2,2]
  - (第 2 行, 第 2 列)：[2,4,2,2]
  - (第 3 行, 第 2 列)：[2,4,2,2]
   

  提示：

  n == grid.length == grid[i].length
  1 <= n <= 200
  1 <= grid[i][j] <= 105

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/equal-row-and-column-pairs
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const rows = Array(row).fill('');
  const cols = Array(col).fill('');
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      rows[i] += grid[i][j] + ',';
      cols[j] += grid[i][j] + ',';
    }
  }
  const map = new Map();
  for (const str of rows) {
    if (!map.has(str)) {
      map.set(str, 1);
    } else {
      map.set(str, map.get(str) + 1);
    }
  }
  let ret = 0;
  for (const str of cols) {
    if (map.has(str)) {
      ret += map.get(str);
    }
  }
  return ret;
};

/**
 * 为什么要加个','
 * 诸如[[11, 1], [1, 11]]的例子，不加特殊符号会识别错误
 */