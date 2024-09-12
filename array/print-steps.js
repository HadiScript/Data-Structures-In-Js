// console.log('print-steps');

// simple steps
// fn(3) =>
// #
// ##
// ###

// const printsSteps = (n) => {
//   for (let x = 1; x <= n; x++) {
//     let s = "";
//     for (let y = 1; y <= n; y++) {
//       if (y <= x) {
//         s += "#";
//       } else {
//         s += " ";
//       }
//     }
//     console.log(s);
//   }
// };

// printsSteps(2);

// recursive sol
const printsSteps = (n, row = 0, s = "") => {
  if (n === row) {
    return;
  }

  if (n === s.length) {
    console.log(s);
    return printsSteps(n, row + 1);
  }
  if (s.length <= row) {
    s += "#";
  } else {
    s += " ";
  }

  printsSteps(n, row, s);
};

printsSteps(2);
