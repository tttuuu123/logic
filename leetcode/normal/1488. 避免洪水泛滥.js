/* 
  你的国家有无数个湖泊，所有湖泊一开始都是空的。当第 n 个湖泊下雨前是空的，那么它就会装满水。如果第 n 个湖泊下雨前是 满的 ，这个湖泊会发生 洪水 。你的目标是避免任意一个湖泊发生洪水。

  给你一个整数数组 rains ，其中：

  rains[i] > 0 表示第 i 天时，第 rains[i] 个湖泊会下雨。
  rains[i] == 0 表示第 i 天没有湖泊会下雨，你可以选择 一个 湖泊并 抽干 这个湖泊的水。
  请返回一个数组 ans ，满足：

  ans.length == rains.length
  如果 rains[i] > 0 ，那么ans[i] == -1 。
  如果 rains[i] == 0 ，ans[i] 是你第 i 天选择抽干的湖泊。
  如果有多种可行解，请返回它们中的 任意一个 。如果没办法阻止洪水，请返回一个 空的数组 。

  请注意，如果你选择抽干一个装满水的湖泊，它会变成一个空的湖泊。但如果你选择抽干一个空的湖泊，那么将无事发生。

  示例 1：

  输入：rains = [1,2,3,4]
  输出：[-1,-1,-1,-1]
  解释：第一天后，装满水的湖泊包括 [1]
  第二天后，装满水的湖泊包括 [1,2]
  第三天后，装满水的湖泊包括 [1,2,3]
  第四天后，装满水的湖泊包括 [1,2,3,4]
  没有哪一天你可以抽干任何湖泊的水，也没有湖泊会发生洪水。
  示例 2：

  输入：rains = [1,2,0,0,2,1]
  输出：[-1,-1,2,1,-1,-1]
  解释：第一天后，装满水的湖泊包括 [1]
  第二天后，装满水的湖泊包括 [1,2]
  第三天后，我们抽干湖泊 2 。所以剩下装满水的湖泊包括 [1]
  第四天后，我们抽干湖泊 1 。所以暂时没有装满水的湖泊了。
  第五天后，装满水的湖泊包括 [2]。
  第六天后，装满水的湖泊包括 [1,2]。
  可以看出，这个方案下不会有洪水发生。同时， [-1,-1,1,2,-1,-1] 也是另一个可行的没有洪水的方案。
  示例 3：

  输入：rains = [1,2,0,1,2]
  输出：[]
  解释：第二天后，装满水的湖泊包括 [1,2]。我们可以在第三天抽干一个湖泊的水。
  但第三天后，湖泊 1 和 2 都会再次下雨，所以不管我们第三天抽干哪个湖泊的水，另一个湖泊都会发生洪水。
   

  提示：

  1 <= rains.length <= 105
  0 <= rains[i] <= 109

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/avoid-flood-in-the-city
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
  const ret = Array(rains.length).fill(-1);
  const map = {};
  const arr = [];
  for (let i = 0; i < rains.length; i += 1) {
    if (rains[i] > 0) {
      const tar = rains[i]; 
      if (!map[tar]) map[tar] = [];
      map[tar].push(i);
      if (map[tar].length === 2) {
        if (arr.length === 0) return [];
        const idx = arr.findIndex((val) => { // 这里可以用二分
          if (val > map[tar][0]) return i;
        });
        if (idx === -1) return [];
        ret[arr[idx]] = tar;
        arr.splice(idx, 1);
        map[tar].shift();
      }
    } else {
      arr.push(i);
      ret[i] = 1;
    }
  }
  return ret;
};

/**
 * 用一个数组arr存储可以抽干任意一个湖泊的天数（即下标）
 * 用一个对象map存储每个湖泊装满水的状态（0代表没装满，1代表已经满了）
 * 那么当某个湖泊状态为2时，代表要去arr中查找是否有位置可以提前抽干
 * 但是还要考虑到类似[0, 1, 1]这种场景，也是无法阻止的，所以去arr中查找时还要注意起始坐标
 */

function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
 
class MinHeap {
	constructor() {
		this.heap = [];
	}

	push(val) {
		const heap = this.heap;
		heap.push(val);
		let cur = heap.length - 1;
		while (cur) {
			const parent = (cur - 1) >> 1;
			if (heap[cur] >= heap[parent]) break;
			swap(heap, cur, parent);
			cur = parent;
		}
	}

	pop() {
		const heap = this.heap;
		if (!heap.length) return;
		swap(heap, 0, heap.length - 1);
		const ret = heap.pop();
		let cur = heap[0];
		let child = 1;
		while (child < heap.length) {
			const right = cur * 2 + 2;
			if (right < heap.length && heap[right] <= heap[child]) child = right;
			if (heap[cur] <= heap[child]) break;
			swap(heap, cur, child);
			cur = child;
			child = cur * 2 + 1;
		}
		return ret;
	}

	size() {
		return this.heap.length;
	}
}

var avoidFlood = function(rains) {
	const lakes = {}; // 存储每个湖泊下雨的day
	for (let i = 0; i < rains.length; i += 1) {
		const id = rains[i];
		if (id > 0) {
			if (!lakes[id]) lakes[id] = [];
			lakes[id].push(i);
		}
	}

	const heap = new MinHeap();
	const set = new Set(); // 存储目前有雨的湖泊id
	const ret = [];
	for (let i = 0; i < rains.length; i += 1) {
		const id = rains[i];
		if (id > 0) {
			if (set.has(id)) return [];
			ret.push(-1);
			if (lakes[id].length <= 1) continue; // 至多只会再下一次雨的湖泊不用管
			set.add(id);
			lakes[id].shift();
			heap.push(lakes[id][0]);
		} else {
			if (!heap.size()) {
				ret.push(1);
			} else {
				const day = heap.pop();
				set.delete(rains[day]);
				ret.push(rains[day]);
			}
		}
	}
	return ret;
}

/**
 * 可以利用小顶堆
 * 先维护一个 Map<lake, array[]> 的数据结构保存每个湖泊会下雨的天数
 * 当一个湖泊已经下过雨，且之后还会下雨，就把下一次下雨的天数放入堆中，因为是小顶堆，那么堆顶一定是最近的下雨天
 * 碰到不下雨的天时，从小顶堆中取出堆顶元素即可
 * 同时额外维护一个Set（用来防止类似[1, 1, 0]的场景），Set中保存目前有水的湖泊
 */