// console.log("anagrams");

// anagram('hadi', 'daih') = true
// anagram('hadi', 'daihe') = false

// const createCharMap = (str) => {
//   const maps = {};

//   for (const x of str) {
//     if (!maps[x]) {
//       maps[x] = 1;
//     } else {
//       maps[x] += 1;
//     }
//   }

//   return maps;
// };

// const anagrams = (str1, str2) => {
//   //  first remove space and symbols and do lovercase;
//   let first = str1.replace(/[^\w]/g, "");
//   let second = str2.replace(/[^\w]/g, "");

//   let fMap = createCharMap(first);
//   let sMap = createCharMap(second);

//   if (Object.keys(fMap).length !== Object.keys(sMap).length) {
//     return false;
//   }

//   for (const x in fMap) {
//     if (fMap[x] !== sMap[x]) return false;
//     return true;
//   }
// };

// console.log(anagrams("hadi raza", "aazr dhaa"));

// sol 2

const anagrams = (str1, str2) => {
  let first = str1.replace(/[^\w]/g, "").toLowerCase();
  let second = str2.replace(/[^\w]/g, "").toLowerCase();
  let firstSort = first.split("").sort().join("");
  let secondSort = second.split("").sort().join("");

  return firstSort === secondSort;
};

console.log(anagrams("hadi raza", "aaar dhia"));
