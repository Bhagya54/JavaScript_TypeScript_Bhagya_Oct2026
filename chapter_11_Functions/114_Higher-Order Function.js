//Higher order function
// A function which takes another fn as an argument or returns another function
function runWithLogin(testFn, testName) {
    let status = testFn();
    return result(testName, status)
}

function loginTest() {
    return "pass"
}

function loginTestFailed() {
    return "fail"
}

function result(testName, result) {
    console.log(`${testName} is ${result}`)
}

runWithLogin(loginTest, "Login Test")
runWithLogin(loginTestFailed, "Dashboard Fail Test")