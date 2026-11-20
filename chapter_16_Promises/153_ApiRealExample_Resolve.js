let apiCall = new Promise(function (resolve, reject) {
    resolve({
        status: 200,
        body: {
            eid: 123, ename: "kishore"
        }
    })
})

apiCall.then(function (response){
    console.log("Response:",response)
    console.log("Status Code:",response.status)
    console.log("Response Body:",response.body)
})