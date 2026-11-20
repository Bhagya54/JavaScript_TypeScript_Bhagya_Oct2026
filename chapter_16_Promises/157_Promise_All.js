let checkAuth = Promise.resolve("Auth OK");
let checkDB = Promise.resolve("DB OK")
let checkCache = Promise.resolve("Cache OK")

Promise.all([checkAuth, checkDB, checkCache])
    .then(function (msg) {
        console.log(`All Checks are successful:[${msg}]`)
    })
    .catch(function (error) {
        console.log("Some Check got failed:", error)
    })

/*
Output when all promises resolved:
All Checks are successful:[Auth OK,DB OK,Cache OK]
*/

Promise.all([
    Promise.resolve("Auth OK"),
    Promise.reject("DB Down"),
    Promise.resolve("Cache OK")
])
    .then(function (msg) {
        console.log(`All Checks are successful:[${msg}]`)
    })
    .catch(function (error) {
        console.log("Some Check got failed:", error)
    })
/*
Output when any of the promises rejected:
Some Check got failed: DB Down
*/

Promise.allSettled([
    Promise.resolve("TestCase A Passed"),
    Promise.reject("TestCase B Failed"),
    Promise.resolve("TestCase C Passed")
])
    .then(function (results) {
        results.forEach((result, index) => {
            console.log(`Test ${index + 1} : ${result.status} - ${result.value || result.reason}`)
        })
    })
    .catch(function (error) {
        console.log("Some Check got failed:", error)
    })

//-------------------results array content----------------------
/*

[
  { status: 'fulfilled', value: 'Test A Passed' },
  { status: 'rejected', reason: 'Test B Failed' },
  { status: 'fulfilled', value: 'Test C Passed' }
]
*/

// Promise.AllSettled concept is used for a test report —
// you want results for ALL tests,
// not just stop at the first failure.

Promise.all([
    Promise.resolve("API OK"),
    Promise.reject("DB Down"),
    Promise.resolve("Web OK")
])
    .then(function (msg) {
        console.log(msg)
    })
    .catch(function (err) {
        console.log("Failed:", err)
    })