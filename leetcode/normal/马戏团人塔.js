/* 
    有个马戏团正在设计叠罗汉的表演节目，一个人要站在另一人的肩膀上。出于实际和美观的考虑，在上面的人要比下面的人矮一点且轻一点。已知马戏团每个人的身高和体重，请编写代码计算叠罗汉最多能叠几个人。

    示例：

    输入：height = [65,70,56,75,60,68] weight = [100,150,90,190,95,110]
    输出：6
    解释：从上往下数，叠罗汉最多能叠 6 层：(56,90), (60,95), (65,100), (68,110), (70,150), (75,190)
    提示：

    height.length == weight.length <= 10000

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/circus-tower-lcci
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
var bestSeqAtIndex = function(height, weight) {
    const heightMir = height;
    const all = [];
    heightMir.forEach((n, i) => {
        all.push({
            h: n,
            w: weight[i],
        });
    });
    all.sort((p, n) => p.h - n.h);
    const weightMir = Array.from(all, (item) => item.w);
    let res = new Array(weightMir.length).fill(1);
    for (let i = 1; i < weightMir.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (weightMir[j] < weightMir[i]) {
                res[i] = Math.max(res[i], res[j] + 1);
            }
        }
    }
    return Math.max(...res);
};

/**
 * height和weight可能有重复数字
 * 以height升序排序，得到对应的weightMir
 * 再用状态转移方程求得weightMir中的最大升序子串长度
 */