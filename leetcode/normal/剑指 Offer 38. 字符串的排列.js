/* 
  输入一个字符串，打印出该字符串中字符的所有排列。

  你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

  示例:

  输入：s = "abc"
  输出：["abc","acb","bac","bca","cab","cba"]
   

  限制：

  1 <= s 的长度 <= 8



  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  const ret = [];
  const data = Array.from(s).sort();
  dfs([], data);
  return ret;

  function dfs(arr, remainArr) {
    if (arr.length === s.length) {
      ret.push(arr.join(''));
      return;
    }
    for (let i = 0; i < remainArr.length; i += 1) {
      if (i > 0 && remainArr[i - 1] === remainArr[i]) continue;
      arr.push(remainArr[i]);
      const temp = [...remainArr];
      temp.splice(i, 1);
      dfs(arr, temp);
      arr.pop();
    }
  }
};

var permutation = function(s) {
  const ret = [];
  const data = Array.from(s).sort();
  const len = data.length;
  const visited = [];
  dfs([], data);
  return ret;

  function dfs(arr) {
    if (arr.length === len) {
      ret.push(arr.join(''));
      return;
    }
    for (let i = 0; i < len; i += 1) {
      // !visited[i - 1] 表示最左边的元素使用过了，后面的元素才可以考虑使用，否则就跳过
      if (visited[i] || (i > 0 && !visited[i - 1] && data[i - 1] === data[i])) continue;
      visited[i] = true;
      arr.push(data[i]);
      dfs(arr);
      arr.pop();
      visited[i] = false;
    }
  }
};