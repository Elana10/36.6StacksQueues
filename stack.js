/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.old = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.second = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val)
    if(!this.first){
      this.first = newNode;
      this.second = newNode;
      this.first.old = this.second;
      this.last = newNode;
    }
    let newSecond = this.first;
    this.first = newNode;
    this.first.old = newSecond;
    this.second = newSecond;
    this.second.next = this.first;
    this.size += 1;

    return undefined
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0){
      throw new Error('Nothing in the stack!')
    }
    const removedNode = this.first;

    if(this.second === this.first){
      this.second = null;
      this.first = null;
    } else {
      let secondNode = this.first.old;
      this.second = this.second.old;
      this.first = secondNode;
    }

    this.size -=1;
    return removedNode.val;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size ===0){
      return true 
    } else {
      return false
    }
  }
}

module.exports = Stack;
