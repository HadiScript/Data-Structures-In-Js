// console.log("chunk.js");

// [1,2,3,4,5], 3 -> [[1,2,3],[4,5]]
// [1,2,3,4,5], 2 -> [[1,2],[3,4], [5]]
// [1,2,3,4,5], 1 -> [[1],[2],[3],[4], [5]]

// const chunk = (arr, n) => {
//   let chunked = [];

//   for (let ele of arr) {
//     let lastele = chunked[chunked.length - 1];
//     if (!lastele || lastele.length === n) {
//       chunked.push([ele]);
//     } else {
//       lastele.push(ele);
//     }
//   }

//   return chunked;
// };

// console.log(chunk([1, 2, 3, 4, 5], 2));

const chunk = (arr, n) => {
  let c = [];

  for (let i = 0; i < arr.length; i += n) {
    c.push(arr.slice(i, n + i));
  }

  return c;
};

console.log(chunk([1, 2, 3, 4, 5, ], 3));
