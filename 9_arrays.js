var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    var i = 0;
    for(i = 0; i< contacts.length ; i++){
        if(contacts[i]["firstName"] === name){
            return contacts[i][prop] || "No Such Property."
        }
    }
    return "Not found!"
}

console.log(lookUpProfile("yash", "likes"));
console.log(lookUpProfile("Sherlock", "number"));

// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> 
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> node .\9_arrays.js
// Not found!
// 0487345643
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> 
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> 