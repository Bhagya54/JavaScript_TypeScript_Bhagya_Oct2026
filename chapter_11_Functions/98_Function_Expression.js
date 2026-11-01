//Normal Function Declaration and Calling
function task() {
    console.log("Using Normal Fn:Executed after 2 seconds");
}
setTimeout(task, 2000)

//-----------------------------------------------------------------------

//Function Declaration
setTimeout(function(){
    console.log("Using Function Expression:Executed after 2 seconds");
},2000)

/*
✅ setTimeout() is a built-in JavaScript function provided by the runtime environment
It tells JavaScript:"Wait for a specified amount of time, then execute this function."
*/

function greet1(name){
    return `hello ${name}`
}
let b1=greet1("Raj")
console.log("Using normal Function:",b1)

const greet2=function (name){
    return `hello ${name}`
}
let b2=greet2("Kishore")
console.log("Using Function Expression:",b2)
