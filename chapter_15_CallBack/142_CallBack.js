function orderReady(){
    console.log("Actual Function -  Your order is ready")
}

function placeOrder(itemName,callMe){
    console.log("Place order of the item",itemName)
    callMe();
}

// 3 ways to call the callback function

//first way - call a function that is implemented separately
placeOrder("Burger",orderReady)

//second way - using anonymous function
placeOrder("Pizza",function (){
    console.log("Anonymous Function -  Your order is ready")
})

//third way - using arrow function
placeOrder("Momos",() => {
    console.log("Arrow Function -  Your order is ready")
})