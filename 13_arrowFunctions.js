// var magic = function() {
//     return new Date();
// }
// console.log(magic());

// // or
// const magic2 = () => new Date();
// console.log(magic2);
// console.log(magic2());

// Output
// 2024-12-06T19:41:58.135Z
// [Function: magic2]
// 2024-12-06T19:41:58.156Z









// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// }
// console.log(myConcat([1,2],[3,4]))

// const myConcat2 = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat2([5,6],[7,8]))

// Output
// [ 1, 2, 3, 4 ]
// [ 5, 6, 7, 8 ]











// const realNumbers = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
// const squareList = (arr) => {
//     const positiveNumbers = arr.filter(num => Number.isInteger(num) && num>0);
//     // const positiveNumbers = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
//     return positiveNumbers;
// }

// // Only print positive integers
// console.log(squareList(realNumbers));

// posNums = squareList(realNumbers);

// // const squareNums = (arr) => {return num => num * num};
// const squareNums = (arr) => {return arr.map(num => num * num);};
// console.log(squareNums(posNums));

// // Output
// // [ 4, 42, 6 ]
// // [ 16, 1764, 36 ]
















// const increment = (num, value = 1) => {return num+value;};
// console.log(increment(5,2));
// console.log(increment(5));

// Output
// 7
// 6

