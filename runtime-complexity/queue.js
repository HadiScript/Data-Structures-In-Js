// console.log('queue.js')

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// const q = new Queue();
// q.add(1);
// q.add(2);
// q.add(3);

module.exports = Queue;
