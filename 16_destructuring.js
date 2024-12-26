"use strict";

// let voxel = {x: 3.6, y: 9.7, z: 2.8};

// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// // or
// const {x:a, y:b, z:c} = voxel;
// console.log(a);

// Output
// 3.6








// const AVERAGE_TEMPERATURES = {
//     today: 15.4,
//     tomorrow: 14.8 
// }

// // function tempOfTomorrow(){
// //     "use strict";
// //     const { tomorrow : tomorrowTemp } = AVERAGE_TEMPERATURES;
// //     return tomorrowTemp;
// // }
// // or
// function tempOfTomorrow(avgTemps){
//     "use strict";
//     const { tomorrow : tomorrowTemp } = avgTemps;
//     return tomorrowTemp;
// }

// console.log(tempOfTomorrow(AVERAGE_TEMPERATURES));








// const AVERAGE_TEMPERATURES = {
//     today: {min: 12.4, max: 17.1},
//     tomorrow: {min: 11.9, max: 14.7}
// }

// function getMaxofTomorrow(avgTemps){
//     "use strict";
//     const {tomorrow : {max : answer}} = avgTemps;
//     return answer;
// }

// console.log(getMaxofTomorrow(AVERAGE_TEMPERATURES));

// Output
// 14.7











// Till now it was for Objects / Object Literals
// From now it is for arrays.
// const [x,y, ,z] = [1,2,3,4,5,6]
// console.log(x,y,z)
// // Output
// // 1 2 4





// let a = 8;
// let b = 6;
// (() => {
//     "use strict";
//     [a,b] = [b,a];
// })();
// console.log(a,b);

// (function(){
//     "use strict";
//     [a,b] = [b,a];
// })();
// console.log(a,b);

// // both functions are same.
// // first one is just an arrow function

// // Output
// // 6 8
// // 8 6













// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list){
//     "use strict";
//     const [a, b, ...arr] = list;
//     // const [, , ...arr] = list;
//     // Both do same job.
//     console.log(a);
//     console.log(b);
//     return arr;
// }
// const arr1 = removeFirstTwo(source);
// console.log(arr1);
// console.log(arr1.length);

// // Output
// // 1
// // 2
// // [
// //     3, 4, 5,  6,
// //     7, 8, 9, 10
// // ]
// // 8















// Ḍestructuring as a function parameter
const values = {
    max: 15,
    min: 11,
    standard: 25,
    yo: 97,
    gg: 234
}

const averageOf = (function(){
    return function averageOf({max, min}){
        return (max + min) / 2.0;
    };
})();

console.log(values);
console.log(averageOf(values));

// Here you are only passing what you need.
// When you are getting information from API request or AJAX requests,
// it has a lot more information than what we need.
// So we use destructuring to work with only what we need.

// Output
// { max: 15, min: 11, standard: 25, yo: 97, gg: 234 }
// 13


// AJAX (Asynchronous JavaScript and XML) is a technique 
// used in web development to send requests to a server 
// and retrieve data without refreshing the entire web page. 
// AJAX enables dynamic updates to parts of a web page, 
// improving user experience.