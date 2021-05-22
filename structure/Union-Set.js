export class UnionSet {
  constructor(n) {
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  get(x) {
    return this.parent[x] = (this.parent[x] === x ? x : this.get(this.parent[x]))
  }

  merge(a, b) {
    const fa = this.get(a);
    const fb = this.get(b);
    if (fa === fb) return;
    this.parent[fa] = fb;
    this.size[fb] += this.size[fa];
  }

  getSize(x) {
    return this.size[this.get(x)];
  }
}
