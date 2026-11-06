let config={}
config.browser="chrome";
config.timeout=3000;
config.testname="Login Test"

console.log(config)//{ browser: 'chrome', timeout: 3000, testname: 'Login Test' }

if(config.browser==="chrome"){
    console.log("I will execute the testcase")
}

delete config.browser;//delete a key
console.log(config)//{ timeout: 3000, testname: 'Login Test' }

let config2={
    browser:"firefox",
    timeout:5000,
    testname:"Register Test"
}
console.log(config2)//{ browser: 'firefox', timeout: 5000, testname: 'Register Test' }