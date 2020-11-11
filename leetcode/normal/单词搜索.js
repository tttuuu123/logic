/*
  给定一个二维网格和一个单词，找出该单词是否存在于网格中。

  单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
   
  示例:

  board =
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ]

  给定 word = "ABCCED", 返回 true
  给定 word = "SEE", 返回 true
  给定 word = "ABCB", 返回 false
   

  提示：

  board 和 word 中只包含大写和小写英文字母。
  1 <= board.length <= 200
  1 <= board[i].length <= 200
  1 <= word.length <= 10^3

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/word-search
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (word.length === 0) return true;
  if (board.length === 0) return false;

  const row = board.length;
  const col = board[0].length;

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (find(i, j, 0)) return true;
    }
  }

  function find(i, j, cur) {
    /* 临界 */
    if (i < 0 || i >= row) return false;
    if (j < 0 || j >= col) return false;
    /* 中止 */
    if (board[i][j] !== word[cur]) return false;
    if (cur === word.length - 1) return true;

    /* 防止已经走过的字母重复被查找 */
    board[i][j] = null;

    const ret = find(i + 1, j, cur + 1) ||
                find(i - 1, j, cur + 1) ||
                find(i, j + 1, cur + 1) ||
                find(i, j - 1, cur + 1);
    
    board[i][j] = word[cur];
    return ret;
  }

  return false;
};