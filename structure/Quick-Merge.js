export class UnionSet {
  constructor(n) {
    this.parent = [];
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    return this.find(this.parent[x]);
  }

  merge(a, b) {
    const fa = this.find(a);
    const fb = this.find(b);
    if (fa === fb) return;
    this.parent[fa] = fb;
  }
}