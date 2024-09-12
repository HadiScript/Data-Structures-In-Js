// console.log('weave.js')

// queueOne [1,2,3]
// queueTwo ['a','b','c']

// weave -> 1,a,2,b,3,c

const Queue = require("./queue");

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}
