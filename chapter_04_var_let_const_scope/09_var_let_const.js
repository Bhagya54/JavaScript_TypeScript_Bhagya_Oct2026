var a=10;
let b=20;
const c=30;

var browser="chrome"
var browser="firefox"//redeclaration
browser="edge"//reassignment
console.log(browser)

var testcases=["Login Test","Registration Test","Checkout Test"]

for(var i=0;i<testcases.length;i++){
    console.log("Running Test: " + testcases[i])
}

console.log("Loop counter leaked outside:",i);