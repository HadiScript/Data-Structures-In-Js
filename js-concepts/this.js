// ++++++++++ 1

// this.a = 5;
// console.log(this.a);

// function f(){
//   console.log(this.a) // undefined
// };
// f()

// const f = () => console.log(this.a);
// f()

// ++++++++++ 2

// const user = {
//   name: "hadi",
//   age: 24,
//   getDetails() {
//     console.log(this.name); // hadi
//   },
//   getDetailsWithArrow: () => {
//     console.log(myAge); // undefined
//   },

//   childObj: {
//     childName: "raza",
//     func() {
//       console.log(this.childName);
//     },
//     // funcArrow: () => {
//     //   console.log(this.name);
//     // },
//     func2 (){
//       const gettingName = () => this.childName;
//       console.log(gettingName())
//     }
//   },
// };

// // user.getDetailsWithArrow(); // undef
// // user.getDetails(); // hadi

// // user.childObj.func(); // raza
// user.childObj.funcArrow(); // hadi
// user.childObj.func2();

// ++++++++++ 3

// class user {
//   constructor(n) {
//     this.name = n;
//   }

//   getname() {
//     console.log(this.name);
//   }

// }

// const newUser = new user("hadi");
// newUser.getname();

// ++++++++++ 4

// this.a = "hadi";

// const user = {
//   name: "hadi",
//   getName() {
//     const name = "hadi !!!";
//     console.log(this.name);
//   },

//   getNameWithArrow() {
//     const name = "hadi !!!";
//     const getNameArrow = () => {
//       console.log(this);
//     };
//     console.log(getNameArrow())

//   },
// };

// user.getName();
// user.getNameWithArrow()
// user.getNameArrow();
