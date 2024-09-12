// ++++ 1

// const user = {
//   name: "hadi",
//   age: 123,
//   isAdmin: true,
// };

// for (key in user) {
//   console.log(key);
// }

// ++++ 2

const user = {
  name: "hadi",

  isAdmin: true,
  age: {
    what: 2,
  },
};

// so its a shelow copy becouse we have an nested object and 
// that have ref to the other object; 

// const objClone = { ...user };
// objClone.name = 90;
// user.age.what = 0;
// both will change


// deep copy
const objClone = JSON.parse(JSON.stringify(user));

objClone.name = 90;
user.age.what = 0;



console.log(objClone);
console.log(user);
