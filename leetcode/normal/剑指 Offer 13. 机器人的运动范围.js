/* 
  地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

  示例 1：

  输入：m = 2, n = 3, k = 1
  输出：3
  示例 2：

  输入：m = 3, n = 1, k = 0
  输出：1
  提示：

  1 <= n,m <= 100
  0 <= k <= 20

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  if (k === 0) return 1;
  const visit = []
  for (let i = 0; i < m; i += 1) {
    visit.push([]);
    for (let j = 0; j < n; j += 1) {
      visit[i].push(false);
    }
  }
  let ret = 0;
  const dirEnum = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const queue = [[0, 0]];
  visit[0][0] = true;
  while (queue.length) {
    const [i, j] = queue.shift();
    ret += 1;
    for (let l = 0; l < 4; l += 1) {
      const x = i + dirEnum[l][0];
      const y = j + dirEnum[l][1];
      if (x < 0 || x >= m || y < 0 || y >= n) continue;
      if (visit[x][y]) continue;
      visit[x][y] = true;
      const temp = '' + x + y;
      let sum = 0;
      for (const num of temp) sum += +num;
      if (sum <= k) queue.push([x, y]);
    }
  }
  return ret;
};