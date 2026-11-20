let testRun=new Promise(function (resolve,reject){
    let apiCall=false;
    if(apiCall){
        resolve({status:"done"})
    }
    else{
        reject("Assertion Failed")
    }
    
})

testRun.then(function (data){
    console.log("Success:",data)
})
.catch(function (error){
    console.log("Error:",error)
})
.finally(function (){
    console.log("Executes always regardless of whether the Promise is fulfilled or rejected.")
})