// implement the node class and linked list class
// based on the directions specified in specifications.html

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      const currNode = this.head;

      newNode.next = currNode;
      this.head = newNode;
    }
  }

  size() {
    let counter = 1;
    let currNode = this.head;

    if (!currNode) return 0;

    while (currNode.next) {
      counter += 1;
      currNode = currNode.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currNode = this.head;

    if (!this.head) return this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    return currNode;
  }
}

module.exports = { Node, LinkedList };
