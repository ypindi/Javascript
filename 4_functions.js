// function myfunc(a, b){
//     console.log(a - b);
// }

// var a = 10;
// var b = 5;
// myfunc(a, b)

// var a = 10;
// var b = "ggg";
// myfunc(a, b)
// // returns NaN





// var myGlobal = 5;

// function fun1(){
//     oopsGlobal = 10; // since we did not put var at start, it
//     // automatically becomes a global
//     var notAGlobal = 10;
//     // since we put a var at start, it is local.
//     // BUT IT GETS activated/created ONLY IF WE CALL THE FUN1
// }

// function fun2(){
//     if(typeof myGlobal != undefined){
//         console.log("my global value is: " + myGlobal);
//     }
//     if(typeof oopsGlobal != undefined){
//         console.log("Created a global oopsGlobal inside fun1: " + oopsGlobal)
//     }
// }

// fun1();
// fun2();






// function nextInLine(arr, item){
//     arr.push(item);
//     // item = arr[0];
//     return arr.shift()
// }

// arr = [1,2,3,4,5]
// console.log("Before:" + JSON.stringify(arr))
// item = nextInLine(arr, 6)
// console.log(item)
// console.log("After: " + JSON.stringify(arr))
// console.log("After: " + arr)

// // Output
// // Before:[1,2,3,4,5]
// // 1
// // After: [2,3,4,5,6]
// // After: 2,3,4,5,6









// y = '12'
// // converts to a common type and checks
// // converts string to a number
// if(y == 12){
//     console.log("it is 12")
// }
// // both should be same type too.
// if(y === 12){
//     console.log("it is 12 hahahahaa")
// }
// y = '24'
// if(y != 24){
//     console.log("it is not 24")
// }
// // both should be same type too.
// if(y !== 24){
//     console.log("it is not 24 hahahahaa")
// }
// // Output
// // it is 12
// // it is not 24 hahahahaa









// val = 37
// if(val<=50 && val>=25 || val>0){
//     console.log("Yayyy")
// }











function switches(val){
    output = ""
    switch(val){
        case 1:
            output+="it is 1";
            break;
        case 2:
            output+="its 2";
            break;
        default:
            output+="Some random thing";
            break;
    }
    return output;
}

function switches2(val){
    output = ""
    switch(val){
        case 1:
        case 2:
        case 3:
            output="Low"
            break;
        case 4:
        case 5:
        case 6:
            output="Mid"
            break;
        case 7:
        case 8:
        case 9:
            output="High"
            break;
        default:
            output+="Hugeee";
            break;
    }
    return output;
}

val = 5
console.log(switches(val))
console.log(switches2(val))
