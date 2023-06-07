/* 
  给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

  元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。


  示例 1：

  输入：s = "hello"
  输出："holle"
  示例 2：

  输入：s = "leetcode"
  输出："leotcede"
   

  提示：

  1 <= s.length <= 3 * 105
  s 由 可打印的 ASCII 字符组成


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/reverse-vowels-of-a-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const arr = [];
  const arrS = s.split('');
  for (let i in arrS) {
    if (set.has(arrS[i])) {
      arr.push(arrS[i]);
      arrS[i] = '';
    }
  }
  for (let i in arrS) {
    if (arrS[i] === '') {
      arrS[i] = arr.pop();
    }
  }
  return arrS.join('');
};

/**
 * 用双指针，从双端遍历，碰到元音字母，交换，效率更高
 */