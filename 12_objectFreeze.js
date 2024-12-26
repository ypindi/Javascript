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