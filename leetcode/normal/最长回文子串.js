/* 
    给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

    示例 1：

    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。
    示例 2：

    输入: "cbbd"
    输出: "bb"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-palindromic-substring
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    let left = 0;
    let right;
    let res = '';
    for (let i = 0; i < len ; i += 1) {
        left = i;
        right = i;
        for (let j = 0; j < 2; j += 1) {
            left = i;
            right = i + j;
            while (left >= 0 && right <= len - 1) {
                if (s[left] === s[right]) {
                    left -= 1;
                    right += 1;
                } else {
                    break;
                }
            }
            /* 当退出循环的时候left和right分别多-/+一次 */
            left += 1;
            right -= 1;
            if ((right - left + 1) > res.length) {
                res = s.slice(left, right + 1);
            } 
        }
        
    }
    return res;
};

/**
 * 暴力解法
 * 确定一个中心数，依次比较这个数的左右2个数是否相等
 * 在这中间要注意2种情况
 * 1、奇数 例如 aaa
 *      初始化 left = idx right = idx
 * 2、偶数 例如 aaaa
 *      初始化 left = idx right = idx + 1
 */