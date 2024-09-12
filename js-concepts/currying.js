// +++++++++++++++ 1

// function f(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

// f(2)(3)

// +++++++++++++++ 2

// function sum(operation) {
//   return (a) => {
//     return (b) => {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "subtract") return a - b;
//       else return "No / Invalid Operation Selected";
//     };
//   };
// }

// console.log(sum("subtract")(2)(3));

// +++++++++++++++ 3
// const sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// };

// console.log(sum(10)(10)(10)());

// +++++++++++++++ 4

// CURRYING VS PARTIAL APPLICATION

// ITS NOT CYRRYING BUT ITS A PARTIAL APPLICATION
// function sum(a) {
//   return (b, c) => {
//     console.log(a * b * c);
//   };
// }

// let x = sum(10);
// x(1, 2);
// x(20, 30);
// x(40, 50);
// OR
// sum(10)(1, 2);
// sum(10)(20, 30);
// sum(10)(40, 50);

// +++++++++++++++ 5

// DOM

// function changeTheContent(id) {
//   return function (content) {
//     document.querySelector(`#${id}`).textContent = content;
//   };
// }

// const header = changeTheContent('root');
// header("Root Heading")
