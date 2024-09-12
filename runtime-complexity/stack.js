class Stack {
  constructor() {
    this.data = [];
  }

  pushing(n) {
    this.data.push(n);
  }

  poping() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

// const s = new Stack();
// s.pushing(1);
// s.pushing(2);
// s.pushing(3);

// console.log(s.peek());
// console.log(s.poping());

// two stack to make the queue

// [1,2,3,4] stack
// [4,3,2,1] stack
//

class QueueByUsingStack {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  adding(n) {
    this.s1.pushing(n);
    this.s2.pushing(this.s1.poping());
  }

  removing() {
    return this.s2.poping();
  }
}

const qbs = new QueueByUsingStack();
qbs.adding(1);
qbs.adding(2);
qbs.adding(3);

console.log(qbs.removing());
