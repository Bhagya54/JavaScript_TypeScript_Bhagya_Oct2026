function openBrowser() {
    return new Promise(function (resolve, reject) {
        resolve("Opening chrome browser")
    })
}

function goToLogin() {
    return new Promise(function (resolve, reject) {
        //code to open login page
        resolve("Opened Login page")
    })
}

function enterCredentials() {
    return new Promise(function (resolve, reject) {
        resolve("Entered username and password")
    })
}

function clickLoginButton() {
    return new Promise(function (resolve, reject) {
        resolve("Clicked Login button")
    })
}

openBrowser()
    .then(function (msg) {
        console.log("Step 1:", msg)
        return goToLogin()
    })
    .then(function (msg) {
        console.log("Step 2:", msg)
        return enterCredentials()
    })
    .then(function (msg) {
        console.log("Step 3:", msg)
        return clickLoginButton()
    })
    .then(function (msg) {
        console.log("Step 4:", msg)
    })
    .catch(function (error) {
        console.log("Error occured in the step:", error)
    })
    .finally(function () {
        console.log("Test Execution Done")
    })
