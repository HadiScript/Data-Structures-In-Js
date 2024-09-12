// DEBOUNCE

const input = document.querySelector("#input");
const content = document.querySelector("#content");

// const debounce = (fn, delay = 1000) => {
//   let timer;

//   return (...args) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// };

const fetchingData = async (e) => {
  content.textContent = "please wait...";
  const res = await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`);
  const data = await res.json();

  content.textContent = JSON.stringify(data);

  console.log(e.target.value);
  console.log(data);
};

var debounced = _.debounce(fetchingData, 1000);
// const debounced = debounce(fetchingData, 1000);

input.addEventListener("input", debounced);
