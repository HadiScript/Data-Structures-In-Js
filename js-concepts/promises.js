// promises, async await, error handling

// Crucial  Examples

// // 1
// console.log("here");

// const func = () => {
//   setTimeout(() => {
//     console.log("in this point");
//   }, 1000);
// };

// func();

// console.log("here 2");

// // 2
// console.log("1");

// const func = (name) => {
//   setTimeout(() => {
//     console.log("in this point");
//     return name;
//   }, 1000);
// };

// const willbename = func("hadi"); // it will return undefined here becouse functions is executing
// console.log(willbename);

// console.log("2");

// // 3
// // Thats how we can handle the async code with the callback
// console.log("1");

// const func = (name, fn) => {
//   setTimeout(() => {
//     console.log("in this point");
//     fn(name);
//   }, 1000);
// };

// // resolved by callback
// func("hadi", (message) => {
//   console.log(message);
// });

// console.log("2");

// 4
// console.log("1");

// const func = (name, fn) => {
//   setTimeout(() => {
//     console.log("in this point");
//     fn(name);
//   }, 1000);
// };

// const funcSecond = (name, fn) => {
//   setTimeout(() => {
//     console.log("in this point");
//     fn(name);
//   }, 0);
// };

// // resolved by callback
// func("hadi", (message) => {
//   console.log(message);
//   funcSecond("ali", (text) => console.log(text)); // callback hell
// });

// console.log("2");

// // 5
// // the prevent the callback hell we have to go with the promises

// console.log(1);

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const res = false;
//     if (res) {
//       resolve("Done");
//     } else {
//       reject("Not Done Yet :(");
//     }
//   }, 1000);
// });

// sub.then((res) => console.log(res)).catch((err) => console.log(err));

// console.log(2);

// // 5
// // example 3 resolve by promise
// console.log("1");

// const func = (name) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Done :)");
//     }, 1000);
//   });
// };

// const func2 = (name) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Done 2:)");
//     }, 1000);
//   });
// };

// func("hadi")
//   .then((res) => {
//     console.log(res);
//     return func2("hellow");
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 6
// promise combinator
// console.log("1");

// const func = (name) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(name);
//     }, 1000);
//   });
// };

// const func2 = (name) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(name);
//     }, 1000);
//   });
// };

// // Promise.all([func("one"), func2("second")]) // failed if any one will failed
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// Promise.race([func("one"), func2("second")]) //what ever fullfiled and rejected the first
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 7
// async await
const func = (name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(name);
    }, 1000);
  });
};

const func2 = (name) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(name);
    }, 1000);
  });
};

const res = async () => {
  try {
    const message = await func("hadi");
    const message2 = await func2("hadi");

    console.log(message, message2);
  } catch (error) {
    console.log("errooorr");
  }
};

console.log(res());
