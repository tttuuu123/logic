export class UnionSet {
  constructor(n) {
    this.color = [];
    for (let i = 0; i < n; i += 1) {
      this.color[i] = i;
    }
  }

  find(x) {
    return this.color[x];
  }

  merge(a, b) {
    const colorA = this.color[a];
    const colorB = this.color[b];
    if (colorA === colorB) return;
    for (let i = 0; i < this.color.length; i += 1) {
      if (this.color[i] === colorB) this.color[i] = colorB;
    }
  }
}