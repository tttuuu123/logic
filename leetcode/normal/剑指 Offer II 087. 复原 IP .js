/* 
  给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。

  有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

  例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

  示例 1：

  输入：s = "25525511135"
  输出：["255.255.11.135","255.255.111.35"]
  示例 2：

  输入：s = "0000"
  输出：["0.0.0.0"]
  示例 3：

  输入：s = "1111"
  输出：["1.1.1.1"]
  示例 4：

  输入：s = "010010"
  输出：["0.10.0.10","0.100.1.0"]
  示例 5：

  输入：s = "10203040"
  输出：["10.20.30.40","102.0.30.40","10.203.0.40"]
   

  提示：

  0 <= s.length <= 3000
  s 仅由数字组成
   

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/0on3uN
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) return [];
  const ret = [];
  dfs(1, [s[0]]);
  return ret;

  function dfs(i, arr) {
    const last = arr[arr.length - 1];
    if (+last > 255) return;
    if (last.length > 1 && last[0] === '0') return;
    if (i === s.length) {
      if (arr.length === 4) {
        ret.push(arr.join('.'));
      }
      return;
    }
    const temp = last + s[i];
    arr[arr.length - 1] = temp;
    dfs(i + 1, arr);
    arr[arr.length - 1] = last;
    arr.push(s[i]);
    dfs(i + 1, arr);
    arr.pop();
  }
};

/**
 * s至少是'1111'，至多是'255255255255'
 * 同时每个s[i]有2种可能
 * 一是加入arr[arr.length - 1]中的一位
 * 二是新开一个新下标加入arr
 */

var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) return [];
  const ret = [];
  dfs(0, []);
  return ret;

  function dfs(start, arr) {
    if (arr.length > 4) return;
    if (start === s.length && arr.length === 4) {
      ret.push(arr.join('.'));
      return;
    }
    let temp = '';
    for (let i = start; i < Math.min(s.length, start + 3); i += 1) {
      temp += s[i];
      if (temp.length > 1 && temp[0] === '0') break;
      if (+temp <= 255) {
        arr.push(temp);
        dfs(i + 1, arr);
        arr.pop();
      }
    }
  }
}