let p = new Promise(function (resolve, reject) {
    resolve(42)
})
p.then(function (msg) {
    console.log("Answer:", msg)
})

/*
Output:
Answer: 42
*/

let q = new Promise(function (resolve, reject) {
    reject("Something broke")
})
q.catch(function (err) {
    console.log("Caught:", err)
})

/*
Output:
Caught: Something broke
*/

let r = Promise.resolve(6)
r.then(function (val) {
    return val * 10
})
    .then(function (data) {
        console.log("Result:", data)
    })

/*
Output:
Result: 60
*/

Promise.resolve(1)
    .then(function (val) {
        console.log("First Value:", val)
        return val + 1
    })
    .then(function (val) {
        console.log("Second Value:", val)
        return val + 1
    })
    .then(function (val) {
        console.log("Third Value:", val)

    })

/*
Output:
First Value: 1
Second Value: 2
Third Value: 3
*/

Promise.resolve("start")
    .then(function (val) {
        console.log("Start Value:", val)
        throw new Error("Broke at step 2")
    })
    .then(function () {
        console.log("this will not run")
    })
    .catch(function (err) {
        console.log("Caught:", err.message)
    })
/*
Output:
Start Value: start
Caught: Broke at step 2
*/

Promise.reject("Test Failed")
    .then(function (data) {
        console.log("Data:", data)
    })
    .catch(function (err) {
        console.log("Error:", err)
    })
    .finally(function () {
        console.log("Cleanup done")
    })

/*
Output:
Error: Test Failed
Cleanup done
*/


Promise.resolve("Quick Win").then(function (data) {
    console.log(data)
});

Promise.reject("Quick Loss").catch(function (error) {
    console.log(error)
});

/*
Output:
Quick Win
Quick Loss
*/

let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");
// 
Promise.all([t1, t2, t3])
    .then(function (results) {
        console.log(results);
    });

/*
Output:
[ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]
*/

let t4 = Promise.resolve("PASS")
let t5 = Promise.reject("FAIL")
let t6 = Promise.resolve("PASS")

Promise.all([t4, t5, t6])
    .then(function (results) {
        console.log("All: ", results)
    })
    .catch(function (err) {
        console.log("Stopped:" + err)
    })

/*
Output:
Stopped:FAIL
*/

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
])
.then(function (results){
    results.forEach(result=>console.log(result))
})
/*
Output:
{ status: 'fulfilled', value: 'API 200' }
{ status: 'rejected', reason: 'API 500' }
{ status: 'fulfilled', value: 'API 201' }
*/

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
])
.then(function (results){
    results.forEach(function (result,index){
       let val=result.status==="fulfilled"?result.value:result.reason
       console.log("Test#"+(index+1)+ "->value:" +val +"->status:" +result.status) 
    })
})

/*
Output:
Test#1->value:API 200->status:fulfilled
Test#2->value:API 500->status:rejected
Test#3->value:API 201->status:fulfilled
*/