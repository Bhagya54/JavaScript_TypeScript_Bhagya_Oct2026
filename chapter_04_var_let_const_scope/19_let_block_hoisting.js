//let and const are block scoped
let x="global"

if(true){
    //TDZ starts here
    //console.log(x)//Reference Error
    let x="hello"
    console.log(x)//hello
    x="block"
    console.log(x)//block
}

console.log(x)//global