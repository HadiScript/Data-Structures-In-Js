// spiral matrix;
// clock wise direction

// fn(3)
// [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5],
// ];

const spiralMat = (n) => {
  let c = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      res[startRow][i] = c;
      c++;
    }

    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      res[i][endCol] = c;
      c++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      res[endRow][i] = c;
      c++;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      res[i][startCol] = c;
      c++;
    }

    startCol++;



  }

  return res;
};

console.log(spiralMat(3));

// console.log("matix");
//
// fn(2)
// [ [1,2],
//  [3,4] ]

// fn(3)
// [ [1,2, 3],
//  [4,5, 6] ]

// function spr(n) {
//   let arr = [];
//   let c = 1;

//   for (let x = 0; x < n; x++) {
//     let temp = [];
//     for (let y = 0; y < n; y++) {
//       temp.push(c);
//       c++;
//     }
//     arr.push(temp);
//   }

//   return arr;
// }

// console.log(spr(4));
