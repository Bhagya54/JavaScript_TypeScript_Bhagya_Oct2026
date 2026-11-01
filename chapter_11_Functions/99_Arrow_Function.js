//Function Expression
const greet1=function (name){
    return "Hello " + name
}
console.log("Using Function Expr:",greet1("Arjun"))

//Arrow Fn
/*
remove function keyword
remove {}
remove return keyword
Use =>
*/

const greet2=(name)=>`Hello ${name}`
console.log("Using Arrow Fn:",greet2("Sekhar"))

const triple=n => n**3
console.log("Using Arrow Fn - Triple:",triple(5))

const sum=(a,b)=>a+b
console.log("Using Arrow Fn - Sum:",sum(2,5))

const printAge=(age)=>console.log("Using Arrow Fn-Age is:",age)
printAge(5)

const say1=()=>console.log('Hi')
const say2=()=>'Hi'

say1()
console.log(say2())