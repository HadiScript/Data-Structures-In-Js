// sol_1
// const reverse = (str) => {
//   return str.split("").reverse().join();
// };
// console.log(reverse("apple"));

// sol_2
const reverse = (str) => {
  let reversed = "";

  for (let chr of str) {
    reversed = chr + reversed;
  }

  return reversed;
};

console.log(reverse("apple"));

// sol3
// const reverse = (str) => {
//   let intoArr = str.split("");

//   return intoArr.reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// };

// console.log(reverse("apple"));
