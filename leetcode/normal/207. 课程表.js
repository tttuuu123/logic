/* 
  你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

  在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

  例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
  请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

  示例 1：

  输入：numCourses = 2, prerequisites = [[1,0]]
  输出：true
  解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
  示例 2：

  输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
  输出：false
  解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
   
  提示：

  1 <= numCourses <= 105
  0 <= prerequisites.length <= 5000
  prerequisites[i].length == 2
  0 <= ai, bi < numCourses
  prerequisites[i] 中的所有课程对 互不相同


  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/course-schedule
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
  const queue = [];
  const map = {};
  const dep = {};
  for (let [a, b] of prerequisites) {
    !map[a] ? map[a] = 1 : map[a] += 1;
    (dep[b] || (dep[b] = [])).push(a);
  }
  for (let i = 0; i < numCourses; i += 1) {
    if (!map[i]) queue.push(i);
  }
  let count = 0;
  while (queue.length > 0) {
    const cur = queue.shift();
    count += 1;
    for (let i of (dep[cur] || [])) {
      map[i] -= 1;
      if (map[i] === 0) queue.push(i);
    }
  }
  return count === numCourses;
};