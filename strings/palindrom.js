// console.log("palindrom");

// palindrome("abba") true abba
// palindrome("hello") false -> olleh

// const palindrome = (str) => {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// };

// console.log(palindrome("hllash") ? "yes" : "noe");

// sol2
const palindrome = (str) => {
  // every
  // all iteration give true and all will be true and if any one give the false and over all will be the false

  return str.split("").every((x, index) => {
    return x === str[str.length - index - 1];
  });
};

console.log(palindrome("abba") ? "yes" : "noe");
