// console.log("fib");

// fib(3)
// 0, 1, 1 return 1;

// fib(4) - 3

//   for (let i = 2; i <= n; i++) {
//     let a = res[i - 1];
//     let b = res[i - 2];
//     res.push(a + b);
//   }

//   return res[n];
// }

// console.log(fib(10));

// sol 2
// memoization;

function memoize(fn) {
  const cache = {};

  return (...args) => {
    if (cache[args]) {
      return;
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

// becouse it take exponential time but we can memoization
// function to improve the performace
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(3)); //take long time

memoize(fib(3));
