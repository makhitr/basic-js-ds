const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.queue = [];
  }

  getUnderlyingList() {
    let list = new queueNode(this.queue[0]);

    let selectedNode = list;
    for (let i = 1; i < this.queue.length; i++) {
      selectedNode.next = new queueNode(this.queue[i]);
      selectedNode = selectedNode.next
    }

    return list
  }

  enqueue(num) {
    this.queue.push(num)
  }

  dequeue() {
    return this.queue.shift()
  }

}

class queueNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}