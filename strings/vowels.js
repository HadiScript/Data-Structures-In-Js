// find number of vowels in a senetance

// hadi -> a i -> 2

function v(str) {
  let vowels = "aeiou";
  let c = 0;

  for (const x of str.toLowerCase()) {
    if (vowels.includes(x)) {
      c++;
    }
  }

  return c;
}

console.log(v("haasdclsdi"));

// sol 2
// function v(str) {
//   we can use also regex
//   return c;
// }

// console.log(v("haasdclsdi"));
