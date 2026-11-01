function retry(testcase,maxRetries=3,delay=1000){
    console.log(`Retrying ${testcase} upto ${maxRetries} times, ${delay}ms apart`)
}
retry("LoginTest")
retry("RegisterTest",5,5000)