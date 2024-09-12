// ++++++ 1
// lexical scope

// var username = "hadi"

// function local(){
//   console.log(username) // so its a lexical scope, vairable will be accessible if that are outside the localscope
// }

// local()

// ========= 2
// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// var innerFunc = outer();

// innerFunc();

// ++++++++++++ 3
// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   x = 20;

//   return inner;
// }

// var innerFunc = outer();

// innerFunc();

//  ++++++++++++++++ 4

// function outer() {
//   var x = 10;

//   function inner() {
//     var y = 5;

//     console.log(x + y);
//   }

//   return inner;
// }

// var innerFunc = outer();

// innerFunc();

//  ++++++++++++++++ 5
// function outer() {
//   var x = 10;

//   function inner() {
//     var y = 5;

//     console.log(x + y);

//     x = 20;
//   }

//   return inner;
// }

// var innerFunc = outer();

// innerFunc();

// innerFunc();

// +++++++++++++++ 6

// let count = 0;

// function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// }

// printCount();

// +++++++++++++++ 6

// var addSix = createBase(6);
// addSix(10); // 16
// addSix(21); // 27

// function createBase(x) {
//   return function (y) {
//     console.log(x + y);
//   };
// }

// +++++++++++++++ 7
// time optilization
// function find() {
//   let a = [];
//   for (let i = 0; i < 100000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// console.time("6");
// const inner = find();
// inner(6);
// console.timeEnd("6");

// console.time("12");
// // const inner2 = find();
// inner(12);
// console.timeEnd("12");

// +++++++++++++++ 8
//

// function a() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     inner(i);
//   }
// }

// a();

// +++++++++++++++ 9
// private counter

// function counter() {
//   var _counter = 0;

//   function add(x) {
//     _counter += x;
//   }

//   function get() {
//     return _counter;
//   }

//   return {
//     add,
//     get,
//   };
// }

// const c = counter();
// c.add(5);
// c.add(5);
// c.add(5);
// console.log(c.get(5));

// +++++++++++++++ 10
// private function

// var module = (function () {
//   function privateMember() {}

//   return {
//     publicMember: function () {
//       // now callthe private member
//     },
//   };
// })();

// +++++++++++++++ 10
// make this runly one once;

let view;
function likeTheVideo() {
  let count = 0;
  return function () {
    if (count === 0) {
      view = "Hadi Raza";
      console.log("Subscribe to ", view);
      count++;
    } else {
      console.log("Already done.");
    }
  };
}
const subs = likeTheVideo();
subs();
subs();
subs();
