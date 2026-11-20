let order=new Promise(function (resolve,reject){
    let orderStatus=true;
    if(orderStatus){
        resolve("Order Delivered Successfully")
    }
    else{
        reject("Order Cancelled due to rain")
    }
})

console.log(order)

order.then(function (data){
    console.log("Success:",data)
})
.catch(function (error){
    console.log("Error:",error)
})