// const increment = (num, value = 1) => {return num+value;};
// console.log(increment(5,2));
// console.log(increment(5));

// Output
// 7
// 6

// Can also define it as an IIFE function:
// IIFE is used to Avoid Global Namespace Pollution.
// const increment = (function() {
//     return function increment(number, value = 1) {
//         return number + value;
//     };
// })();
// 
// An Immediately Invoked Function Expression (IIFE) is a 
// JavaScript design pattern where a function is executed 
// immediately after it is defined.
// (function() {
//     // Code here runs immediately
// })();
// 
// Or with an arrow function:
// (() => {
//     // Code here runs immediately
// })();
// 
// Create a Private Scope for Variables:
// (function() {
//     const secret = "Hidden";
//     console.log(secret); // Output: Hidden
// })();

// console.log(typeof secret); // Output: undefined








// const counter = (function() {
//     let count = 0;
//     return function() {
//         return ++count;
//     };
// })();

// console.log(counter());
// console.log(counter());

// Output
// 1
// 2




