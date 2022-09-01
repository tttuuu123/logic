/* 
  你有一些球的库存 inventory ，里面包含着不同颜色的球。一个顾客想要 任意颜色 总数为 orders 的球。

  这位顾客有一种特殊的方式衡量球的价值：每个球的价值是目前剩下的 同色球 的数目。比方说还剩下 6 个黄球，那么顾客买第一个黄球的时候该黄球的价值为 6 。这笔交易以后，只剩下 5 个黄球了，所以下一个黄球的价值为 5 （也就是球的价值随着顾客购买同色球是递减的）

  给你整数数组 inventory ，其中 inventory[i] 表示第 i 种颜色球一开始的数目。同时给你整数 orders ，表示顾客总共想买的球数目。你可以按照 任意顺序 卖球。

  请你返回卖了 orders 个球以后 最大 总价值之和。由于答案可能会很大，请你返回答案对 109 + 7 取余数 的结果。

  示例 1：


  输入：inventory = [2,5], orders = 4
  输出：14
  解释：卖 1 个第一种颜色的球（价值为 2 )，卖 3 个第二种颜色的球（价值为 5 + 4 + 3）。
  最大总和为 2 + 5 + 4 + 3 = 14 。
  示例 2：

  输入：inventory = [3,5], orders = 6
  输出：19
  解释：卖 2 个第一种颜色的球（价值为 3 + 2），卖 4 个第二种颜色的球（价值为 5 + 4 + 3 + 2）。
  最大总和为 3 + 2 + 5 + 4 + 3 + 2 = 19 。
  示例 3：

  输入：inventory = [2,8,4,10,6], orders = 20
  输出：110
  示例 4：

  输入：inventory = [1000000000], orders = 1000000000
  输出：21
  解释：卖 1000000000 次第一种颜色的球，总价值为 500000000500000000 。 500000000500000000 对 109 + 7 取余为 21 。

  提示：

  1 <= inventory.length <= 105
  1 <= inventory[i] <= 109
  1 <= orders <= min(sum(inventory[i]), 109)

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/sell-diminishing-valued-colored-balls
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function(inventory, orders) {
  const heap = new MaxHeap();
  for (const count of inventory) {
    heap.push(count);
  }
  let ret = 0;
  const MOD = 1e9 + 7;
  while (orders) {
    const count = heap.pop();
    ret = (ret + count) % MOD;
    heap.push(count - 1);
    orders -= 1;
  }
  return ret;
};

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    const heap = this.heap;
    heap.push(val);
    let cur = heap.length - 1;
    while (cur) {
      const parent = (cur - 1) >> 1;
      if (heap[cur] <= heap[parent]) break;
      swap(heap, cur, parent);
      cur = parent;
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length === 0) return;
    swap(heap, 0, heap.length - 1);
    const ret = heap.pop();
    let cur = 0;
    let child = 1;
    while (child < heap.length) {
      let right = cur * 2 + 2;
      if (right < heap.length && heap[right] >= heap[child]) child = right;
      if (heap[cur] >= heap[child]) break;
      swap(heap, cur, child);
      cur = child;
      child = cur * 2 + 1;
    }
    return ret;
  }
}

/**
 * 大顶堆就是用来处理一堆数中每次找出最大的那个
 */