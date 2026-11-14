function cafe(item,callMe){
    console.log("Preparing... Order... 1m")
    console.log("Preparing... Order... 2m")
    console.log("Preparing... Order... 3m")
    callMe(item);
}

function callMeWhenOrderReady(item){
    console.log("Normal Fn - Item is ready:",item)
}

// First way: Passing an existing function as an argument.
// The passed function acts as a callback function.
cafe("Burger",callMeWhenOrderReady)

// Second way: Passing an anonymous function as an argument.
cafe("Pizza",function (item){
    console.log("Anonymous Fn - Item is ready:",item)
})

// Third way: Passing an arrow function as an argument.
cafe("Momos",(item)=>{
    console.log("Arrow Fn - Item is ready:",item)
})