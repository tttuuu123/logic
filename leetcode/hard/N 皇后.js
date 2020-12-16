/* 
  n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
  给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
  示例：

  输入：4
  输出：[
  [".Q..",  // 解法 1
    "...Q",
    "Q...",
    "..Q."],

  ["..Q.",  // 解法 2
    "Q...",
    "...Q",
    ".Q.."]
  ]
  解释: 4 皇后问题存在两个不同的解法。
   

  提示：

  皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/n-queens
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let ret = [];
  find([], 0);
  return ret;

  /**
   * 
   * @param {array} temp 存放摆放的棋子，索引表示行，值表示列
   * @param {number} curRow 当前行
   */
  function find(temp, curRow) {
    if (curRow === n) {
      ret.push(
        temp.map((col) => {
          const rowArr = new Array(n).fill('.');
          rowArr[col] = 'Q';
          return rowArr.join('');
        })
      );
    }
    for (let curCol = 0; curCol < n; curCol += 1) {
      const noPlace = temp.some((colIdx, rowIdx) => {
        return (
          colIdx === curCol ||
          (rowIdx + colIdx) === (curRow + curCol) ||
          (rowIdx - colIdx) === (curRow - curCol)
        );
      });
      if (noPlace) continue;
      find([...temp, curCol], curRow + 1);
    }
  }
};

/**
 * 条件：
 * 行不能一样
 * 列不能一样
 * 行+列（左斜对角线）不能一样
 * 行-列（右斜对角线）不能一样
 */