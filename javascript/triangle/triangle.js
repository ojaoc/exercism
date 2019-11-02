//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(x, y, z) {
    if (x < 0 || y < 0 || z < 0) this.triangle = 'degenerate';
    else if (x >= y + z || y >= z + x || z >= x + y) this.triangle = 'degenerate';
    else if (x === y && y === z) this.triangle = 'equilateral';
    else if (x === y || y === z || z === x) this.triangle = 'isosceles';
    else this.triangle = 'scalene';
  }

  kind() {
    if (this.triangle === 'degenerate') throw new Error(this.triangle);
    return this.triangle;
  }
}