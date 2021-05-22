// 按质优化，压缩路径
export class UnionSet {
  constructor(n) {
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    const root = this.find(this.parent[x]);
    this.parent[x] = root;
    return root;
  }

  merge(a, b) {
    const fa = this.find(a);
    const fb = this.find(b);
    if (fa === fb) return;
    if (this.size[fa] < this.size[fb]) {
      this.parent[fa] = fb;
      this.size[fb] += this.size[fa];
    } else {
      this.parent[fb] = fa;
      this.size[fa] += this.size[fb];
    }
  }
}
