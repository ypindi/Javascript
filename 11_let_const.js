"use strict";
// to catch coding mistakes. eg. create a variable without declaring.

// var cat = "Panda";
// var cat = "Fluffy";
// // no error

// // let dog = "Panda";
// // let dog = "Fluffy";
// // // error
// // // let only define one time.

// let dog = "Panda";
// dog = "Fluffy";
// // allowed








// function checkScope() {
//     "use strict";
//     let i = "function scope";
//     if (true) {
//         let i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }
// checkScope();

// // Output
// // Block scope i is:  block scope
// // Function scope i is:  function scope
// // For Let, the scope is only inside the {} braces where it is present.









// function checkScope() {
//     "use strict";
//     var i = "function scope";
//     if (true) {
//         var i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }
// checkScope();

// Output
// Block scope i is:  block scope
// Function scope i is:  block scope
// // For Var, the scope inside the whole function
// // or whole JS file of where it is present.
// // 2nd time declaration persisted outside if too.










// const is all the features of let but read-only.
let str = "awesome";
const SENTENCE = "Yashwanth is " + str;
console.log(SENTENCE)

const arr = [5,7,2]
// arr = [2,5,7]
// error

arr[0] = 2
arr[1] = 5
arr[2] = 7
// Only editing in place is allowed.
console.log(arr)
