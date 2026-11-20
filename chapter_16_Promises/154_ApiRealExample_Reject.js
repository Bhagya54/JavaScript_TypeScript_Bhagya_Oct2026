let apiCall = new Promise(function (resolve, reject) {
    reject("500 Error")
})

apiCall.then(function (response){
    console.log("Data is success!!",response)
})
.catch(function (error){
    console.log("Error:",error)
})