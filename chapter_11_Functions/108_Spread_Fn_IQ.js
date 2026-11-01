function add(a,b,c){
    return a+b+c
}
let args=[10,20,30];
console.log("Sum of values:",add(...args))

console.log("******************")

//Rest
function hasError(...codes){
    return codes.some(code => code>=400);
}

let statusCodes=[203,400,201]
console.log("Do we have an error:",hasError(...statusCodes))//spread


