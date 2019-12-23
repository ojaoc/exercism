export class Triangle {

  constructor(numberOfRows) {

    this.TRIANGLE = [];
    let eachRow = [1];

    for (let i = 0; i < numberOfRows; i++) {

      for (let n = 1; n < i; n++) {

        let addedNumber = this.TRIANGLE[i - 1][n - 1] + this.TRIANGLE[i - 1][n];
        eachRow.push(addedNumber);

      }

    if (i > 0) eachRow.push(1);
    this.TRIANGLE.push(eachRow);
    eachRow = [1];

    }

  }

  get lastRow() {

    return this.TRIANGLE[this.TRIANGLE.length - 1];

  }

  get rows() {

    return this.TRIANGLE;

  }

}