// console.log("fizbuz");
// print 1 - n numbers but instead of three multiple of three print fizz
// for multiple of 5 print buzz
// for multiple of 3 and 5 print fizzbuzz

const fizzbuzz = (n) => {
  // console.log(15 % 3 === 0 && 15 % 5 === 0);

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
};

fizzbuzz(15);
