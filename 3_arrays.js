// var myArray = ["Yashwanth", 25]

// var nestedArray = [["Yashwanth", 25], ["Yash", 21]]

// // in strings, can't modify a specific element.
// // but in arrays, you can.

// myArray[1] = 22
// console.log(myArray)






// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
console.log(ourArray)
ourArray.pop()
console.log(ourArray)
// [ 'Stimpson', 'J', 'cat' ]
ourArray.shift()
console.log(ourArray)
// [ 'J', 'cat' ]
ourArray.unshift("Yashhh")
console.log(ourArray)
// [ 'Yashhh', 'J', 'cat' ]