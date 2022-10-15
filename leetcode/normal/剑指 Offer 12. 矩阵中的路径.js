/* 
  给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

  单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

  例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。


  示例 1：

  输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
  输出：true
  示例 2：

  输入：board = [["a","b"],["c","d"]], word = "abcd"
  输出：false
   

  提示：

  m == board.length
  n = board[i].length
  1 <= m, n <= 6
  1 <= word.length <= 15
  board 和 word 仅由大小写英文字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const row = board.length;
  const col = board[0].length;
  const dirEnum = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const visited = Array(row).fill(0).map(() => Array(col).fill(false));
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (help(i, j, 0)) return true;
    }
  }
  return false;

  function help(i, j, idx) {
    if (board[i][j] !== word[idx]) return false;
    if (idx === word.length - 1) return true;
    let ret = false;
    visited[i][j] = true;
    for (let k = 0; k < 4; k += 1) {
      const x = i + dirEnum[k][0];
      const y = j + dirEnum[k][1];
      if (x < 0 || x >= row) continue;
      if (y < 0 || y >= col) continue;
      if (visited[x][y]) continue;
      if (help(x, y, idx + 1)) {
        ret = true;
        break;
      }
    }
    visited[i][j] = false;
    return ret;
  }
};