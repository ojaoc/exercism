class Matrix {
  constructor(matrix) {
    this.matrix = matrix
      .split("\n");
      .map(row => {
        for (let i = 0; i < row.length; i++) {
          if (parseInt(row.charAt(i)))
          parseInt(row.charAt(i));
        }
      })
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    throw new Error("Remove this statement and implement this function");
  }
}

let matrix = new Matrix('1 2\n3 4');
console.log(matrix.rows);