
/* 
    编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

    输入: ["flower","flow","flight"]
    输出: "fl"
    示例 2:

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    说明:

    所有输入只包含小写字母 a-z 。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-common-prefix
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const arr = [...strs];
    arr.sort((prev, next) => prev.length - next.length);
    let res = arr.shift();
    let temp;
    let i;
    if (!res) return '';
    while (arr.length > 0) {
        temp = arr.shift();
        i = 0;
        while (i < res.length) {
            if (res[i] === temp[i]) {
                i += 1;
            } else {
                res = res.substr(0, i);
                break;
            }
        }
        if (res === '') break;
    }
    return res;
};