class Matrix {
  constructor(string) {
    this.matrix = string
      .split("\n"); // Seperate elements by row 
    this.row = [];
    let columns = [];
    /* The code below will turn each string number into 
    a real number. Now, we have an array of rows, each 
    containing the corresponding integers */
    for (let i = 0; i < this.matrix.length; i++) {
      this.row.push(this.matrix[i]
        .match(/\d+/g)
        .map(item => {
          return Number(item);
        }));
    }
  }

  get rows() {
    return this.row;
  }

  get columns() {
    // for (let i = 0; i < this)
  }
}

let matrix = new Matrix('1 3 4 3\n3 2 1 7');
console.log(matrix.rows[2]);