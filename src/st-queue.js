const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

  constructor(){
    this.top = null;
    this.main = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value ) {
    const node = new ListNode(value);
    if(this.top){
      this.main.next = node;
      this.main = node;
    } else {
      this.top = node;
      this.main = node;
    }
    this.length++;
  }

  dequeue() {
    const current = this.top;
    this.top =  this.top.next;
    this.length--;

    return current.value; 
  }

}
