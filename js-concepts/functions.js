// ========== 1
// const func = function (a) {
//   return a * a;
// };

// // anonymus func, and func expression becouse we assign function to a veriable

// console.log(func(5));

// ========== 2
// first class fucntion

// func treated like a variable

// function squre (a) {
//   return a*a;
// }
// function disp (fn, a){
//   console.log("calling this func", fn(a))
// }

// disp(squre, 99)

// ========== 3
// IIFE Ime invoke expression

// (function squre(a) {
//   console.log(a * a);
// })(23);

// (function (x) {
//   return (function (y) {
//     // console.log(x * 2);
//     console.log(x * y);
//   })(6);
// })(5);

// ========== 4
// HOSTING

// func() //hoisted

// function func() {
//   console.log("hi");
// }

// func(); //not
// const func = () => {
//   console.log("jo")
// }

// x = 10;
// console.log(x) // 10
// var x = 6;

// function func () {
//   console.log(x);
//   var x = 10; // undefined
//   console.log("hi")
// }

// func();

// var b = 20;

// var func = function(){
//   console.log(b); // undefined
//   var b = 10;
// }

// func();

// ========== 5
// callback

// function greeting(x){
//   console.log(`hello ${x}`)
// }

// function display (func){
//   const name = "hadi";
//   func(name)
// }

// display(greeting)

// ========== 6
// Arrow Fucntion have to global object

function greeting() {
  console.log(arguments[0]) // its not available in the arrow functions
}

greeting("hadi")
