function madLibs(myNoun, myAdjective, myVerb, myAdverb){
    var result = ""
    result += "Wow this " + myNoun + " was a very " 
    + myAdjective + " popular " + myAdverb + " " + myVerb
    + " quickly."
    return result
}

console.log(madLibs("Tiger", "ferocious", "Cooking", "delicious"))


// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> node .\2_madlibs.js
// Wow this Tiger was a very ferocious popular delicious Cooking quickly.
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> 