// const sums = (function() {
//     return function sum(x, y, z){
//         const args = [x,y,z];
//         return args.reduce((a,b)=> a+b, 0);
//     };
// }
// )();
// console.log(sums(4,5,6));

// Output
// 15



// // Rest Operator is the ... it converts the args to an array.
// const sums = (function (){
//     return function (...args){
//     // return function sums(...args){ // even this works.
//         return args.reduce((a, b) => a+b, 0);
//     };
// })();

// console.log(sums(1,2,3,4,5));

// Output
// 15








// Spread Operator - used to copy contents of one array to another.

// Using no Spread Operator
// changing arr1 affects arr2.
// const arr1 = ["Jan", "Feb", "Mar"];
// let arr2;
// (function(){
//     arr2 = arr1;
//     arr1[0] = 'potato';
// })();

// console.log(arr2)

// Output
// [ 'potato', 'Feb', 'Mar' ]



// // Using the spread operator
// Changing arr1 doesn't affect arr2.
// const arr1 = ["Jan", "Feb", "Mar"];
// let arr2;
// (function(){
//     arr2 = [...arr1];
//     arr1[0] = 'potato'
// })();
// console.log(arr2)

// // Output
// // [ 'Jan', 'Feb', 'Mar' ]