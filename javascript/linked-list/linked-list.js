export class LinkedList extends Array {

  delete(value) {

    const index = this.indexOf(value); 
    
    if (index !== -1) {

      return this.splice(index, 1);

    }

  }

  count() {

    return this.length;

  }

}

export class Node {
    
}