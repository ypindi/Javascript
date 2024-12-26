// console.log("Hello World")

// inline comment

/*
multi line comment
*/




// Data Types:
// Boolean
// Object : store a lot of key value pairs
// String
// Symbol : immutable and unique
// undefined : not assigned a type yet
// null : assigned and it is nothing.
// Number
// // remember as BOSSUNN




// scope throughout the whole program
// var x = "Hello"
// console.log(x)
// x = 5
// console.log(x)
// let only in the scope of its definition
// const is constant




var str1 = "I am a \"double quoted\" string"
var str2 = 'I am a "double quoted" string'
var str3 = `I am a "double quoted" and 'single quoted' string`
// console.log(str1)
// console.log(str2)
// console.log(str3)

// console.log(str1.length)
// console.log(str1[0])
// console.log(str1.at(2))
console.log(str1[str1.length - 1]) //to get last letter
console.log(str1[str1.length - 3]) //to get 3rd last letter
// console.log(str1[-1]) doesn't work


// Prompt the user for input
var userInput = prompt("Enter your name: ");
// Display the input
console.log("Hello, " + userInput + "!");