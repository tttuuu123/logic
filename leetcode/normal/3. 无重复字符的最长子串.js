/* 
    给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

    示例 1:

    输入: "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    示例 2:

    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
    示例 3:

    输入: "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let temp = '';
    let max = 0;
    let idx = -1;
    for (let word of s) {
        idx = temp.indexOf(word);
        temp += word;
        if (idx !== -1) {
            temp = temp.substring(idx + 1, temp.length);
        }
        max = Math.max(temp.length, max);
    }
    return max;
};

/**
 * 遍历字符串，先判断临时字符串temp中是否存在当前字母word
 * 将当前字符串temp加上这个字母
 * 之前的判断如果是存在，则截取temp的下标从idx+1至末尾
 * 比较当前temp和之前最大长度
 * 
 * 每次在 idx = temp.indexOf(word); 中都要遍历，这一步可以优化
 * 存一个map，每次把当前word作key，idx作val
 * 遍历中如果 word in map 并且 map[word] 大于 当前下标idx - 当前最大长度max，也就是word在当前temp中存在重复的
 * 就可以直接取到当前temp的新起点，map[word] + 1
 */
