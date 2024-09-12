console.log("maxchar.js");

// maxChar('haadi') === a
// maxChar('wwwwwwddd') === w
// maxChar('hadi 11222') === 222

const maxChar = (str) => {
  const count = {};
  let max = 0;
  let maxChar = "";

  for (let chr of str) {
    if (!count[chr]) {
      count[chr] = 1;
    } else {
      count[chr] += 1;
    }
  }

  // for objects
  for (let char in count) {
    if (count[char] > max) {
      // console.log(count[char]);
      max = count[char];
      maxChar = char;
    }
  }

  return `max count of character is "${maxChar}" for "${max}" times`;
};

console.log(maxChar("hhhhhhaadi"));
