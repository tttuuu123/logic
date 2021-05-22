export class UnionSet {
  constructor(n) {
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
    }
  }

  get(x) {
    return this.parent[x] = (this.parent[x] === x ? x : this.get(this.parent[x]))
  }

  merge(a, b) {
    this.parent[this.get(a)] = this.get(b);
  }
}
