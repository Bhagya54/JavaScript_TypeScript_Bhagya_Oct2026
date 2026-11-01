function retryTracker(max){
    let attempts=0;
    function tryAgain(testName){
        attempts++;
        if(attempts>max){
            return `${testName} exceeded max retries (${max})`
        }
        else{
            return `Attempt ${attempts}/${max} for ${testName} `
        }
    }
    return tryAgain;
}

let retry=retryTracker(3);
console.log(retry("Login Test"))
console.log(retry("Login Test"))
console.log(retry("Login Test"))
console.log(retry("Login Test"))