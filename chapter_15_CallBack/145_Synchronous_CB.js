let testResults = ["pass", "fail", "pass", "skip"]
//synchronous in nature - runs one by one
testResults.forEach(function (result, index) {
    console.log(`Test ${index}:${result}`)
})