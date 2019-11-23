export class Matrix {
  constructor(string) {
    this.matrix = string
      .split("\n"); // Seperate elements by row 
    this.listOfRows = [];
    this.listOfColumns = [];
    /* The code below will turn each string number into 
    a real number. Now, we have an array of rows, each 
    containing the corresponding integers */
    for (let i = 0; i < this.matrix.length; i++) {
      this.listOfRows.push(this.matrix[i]
        .match(/\d+/g)
        .map(item => {
          return Number(item);
        }));
    }

    for (let n = 0; n < this.listOfRows[0].length; n++) {
      let eachColumn = [];
      this.listOfRows.forEach(item => {
        eachColumn.push(item[n]);
      });
      this.listOfColumns.push(eachColumn);
    }
  }

  get rows() {
    return this.listOfRows;
  }

  get columns() {
    return this.listOfColumns;
  }
}