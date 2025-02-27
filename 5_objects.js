// var myDog = {
//     "name": "Panda",
//     "total legs": 4,
//     "tails": 1,
//     "friends": ["Everything!"],
//     "id": 92461
// };

// var tail = myDog.tails
// console.log(tail)
// var leg = myDog["total legs"]
// console.log(leg)

// var property = "id"
// console.log(myDog[property])

// myDog.name = "Fluffy Snow"
// console.log(myDog.name)

// myDog.bark = "bow bow"
// console.log(myDog.bark)
// myDog["bark 2"] = "woof woof"
// console.log(myDog["bark 2"])

// delete myDog.bark




function objectUsage(val){
    var table = {
        "Max": "verstappen",
        "Charles": "Leclerc",
        "Alexander": "Albon"
    };

    var result = ""
    var values = table[val];
    result = values;
    return result;
}

var val = "Charles";
console.log(objectUsage(val));


// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> node .\5_objects.js
// Leclerc
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> 