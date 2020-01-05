export class LinkedList {

  constructor() {

    this.arr = [];

  }

  push(val) {

    this.arr.push(val);
    return val;

  }

  pop() {

    return this.arr.pop();

  }

  shift() {

    return this.arr.shift();

  }

  unshift(val) {

    this.arr.unshift(val);
    return val;

  }

  delete(val) {

    if (this.arr.indexOf(val) !== -1) {

      return this.arr.splice(this.arr.indexOf(val), 1);

    }

  }

  count() {

    return this.arr.length;

  }

}