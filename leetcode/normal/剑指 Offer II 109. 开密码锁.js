/* 
  一个密码锁由 4 个环形拨轮组成，每个拨轮都有 10 个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

  锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

  列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

  字符串 target 代表可以解锁的数字，请给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

  示例 1:

  输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
  输出：6
  解释：
  可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
  注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，因为当拨动到 "0102" 时这个锁就会被锁定。
  示例 2:

  输入: deadends = ["8888"], target = "0009"
  输出：1
  解释：
  把最后一位反向旋转一次即可 "0000" -> "0009"。
  示例 3:

  输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
  输出：-1
  解释：
  无法旋转到目标数字且不被锁定。
  示例 4:

  输入: deadends = ["0000"], target = "8888"
  输出：-1
   

  提示：

  1 <= deadends.length <= 500
  deadends[i].length == 4
  target.length == 4
  target 不在 deadends 之中
  target 和 deadends[i] 仅由若干位数字组成


  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/zlDJc7
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  if (target === '0000') return 0;
  const dead = new Set(deadends);
  if (dead.has('0000')) return -1;
  let ret = 0;
  const queue = ['0000'];
  const hasVisited = new Set(['0000']);
  while (queue.length) {
    ret += 1;
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const word = queue.shift();
      for (const nextWord of getNextWords(word)) {
        if (nextWord === target) return ret;
        if (!hasVisited.has(nextWord) && !dead.has(nextWord)) {
          queue.push(nextWord);
          hasVisited.add(nextWord);
        }
      }
    }
  }
  return -1;

  function getNextWords(word) {
    const ret = [];
    const arr = Array.from(word);
    for (let i = 0; i < 4; i += 1) {
      const num = arr[i];
      arr[i] = numAddOne(+num);
      ret.push(arr.join(''));
      arr[i] = numMinusOne(+num);
      ret.push(arr.join(''));
      arr[i] = num;
    }
    return ret;
  }

  function numAddOne(num) {
    if (num === 9) return '0';
    return '' + (num + 1);
  }

  function numMinusOne(num) {
    if (num === 0) return '9';
    return '' + (num - 1);
  }
};

