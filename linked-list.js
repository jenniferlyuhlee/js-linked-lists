/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head){
        this.head = newNode;
        this.tail = newNode;
    }
    else{
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length ++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let oldTail = this.tail;
    if (currentNode === null){
      throw new Error ("Error: Linked list empty!")
    }
    while (currentNode){
       //checks if there's only 1 node in the list
      if (currentNode === oldTail){
        this.head = null;
        this.tail = null;
        this.length --;
        return currentNode.val
      }
      else if (currentNode.next === oldTail){
        this.tail = currentNode;
        this.tail.next = null;
        this.length --;
        return oldTail.val;
      }
      currentNode = currentNode.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let oldHead = this.head;
    if (oldHead === null){
      throw new Error ("Error: Linked list empty!")
    }
    if (oldHead.next){
      this.head = oldHead.next;
    }
    //handles if one item in list
    else{
      this.head = null;
      this.tail = null;
    }
    this.length --;
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length){
      throw new Error ("Invalid index!");
    }
    let currentNode = this.head;
    let i = 0;
    while (currentNode){
      if (i===idx){
        return currentNode.val;
      }
      currentNode = currentNode.next;
      i++;
    }
  
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length){
      throw new Error ("Invalid index!");
    }
    let currentNode = this.head;
    let i = 0;
    while (currentNode){
      if (i===idx){
        currentNode.val = val;
        return currentNode.val;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length){
      throw new Error ("Invalid index!");
    }
    //handles first index insertion
    if (idx === 0){
      this.unshift(val);
    }
    //handles last index insertion
    if (idx===this.length){
      this.push(val);
    }

    let currentNode = this.head;
    let i = 0;
    while (currentNode){
      //takes node before index to set .next to new node
      if (i==idx-1){
        const newNode = new Node(val);
        newNode.next = currentNode.next
        currentNode.next = newNode;
        this.length ++;
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length){
      throw new Error ("Invalid index!");
    }
    //if item at first index is removed
    if (idx === 0){
      return this.shift()

    }
    //if item at last index is removed
    if (idx===this.length-1){
      return this.pop()
    }

    let currentNode = this.head;
    let i = 0;
    while (currentNode){
      if (i==idx-1){
        let removedNode = currentNode.next
        currentNode.next = currentNode.next.next;
        return removedNode.val
      }
      currentNode = currentNode.next;
      i++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    //empty list
    if (!this.head){
      return 0
    }
    let currentNode = this.head;
    let sum = 0;
    while (currentNode){
      sum += currentNode.val
      currentNode=currentNode.next
    }
    return (sum/this.length)
  }
}

module.exports = LinkedList;
