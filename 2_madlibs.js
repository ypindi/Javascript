function madLibs(myNoun, myAdjective, myVerb, myAdverb){
    var result = ""
    result += "Wow this " + myNoun + " was a very " 
    + myAdjective + " popular " + myAdverb + " " + myVerb
    + " quickly."
    return result
}

console.log(madLibs("Tiger", "ferocious", "Cooking", "delicious"))