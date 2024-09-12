// console.log("reverse-int");
// like 91 === 19

const reverseInt = (n) => {
  // console.log(Math.sign(-91))

  return Math.sign(n) * parseInt(n.toString().split("").reverse().join(""));
};
// console.log(typeof reverseInt(43));
console.log(reverseInt(-91));
