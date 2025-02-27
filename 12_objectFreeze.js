function objectFreeze(){
    const MyObject = {
        "PI" : 3.14
    }

    Object.freeze(MyObject);

    try{
        MyObject.PI = 99;
    } catch (ex){
        console.log(ex);
    }
    return MyObject.PI;
}

let answer = objectFreeze();
console.log(answer)


// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> node .\12_objectFreeze.js
// 3.14
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Javascript> 