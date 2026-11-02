let str = "Login_Test_Pass_001"
console.log("Test Name:", str.slice(0, 5))//Login
console.log("Test Case Number:", str.slice(-3))//001
console.log("Using Slice() method:", str.slice(11))//Pass_001

console.log("Using Substring:", str.substring(0, 5))

const s = "JavaScript";
//Negative index
console.log("Using slice - Negative Values:",s.slice(-6,-1))
console.log("Using substring - Negative Values:",s.substring(-6,-1))//considers -ve values as 0.hence 0..0

//start>end
console.log("Using slice - start>end:",s.slice(5,1))
console.log("Using substring - start>end:",s.substring(5,1))

//NaN
console.log("Using slice - NaN:",s.slice(NaN))
console.log("Using substring - NaN:",s.substring(NaN))



