let scores=[45,85,91,60,73]
//map - transforms each element and returns a new array
//It will always returns same number of values that you have in the original array,
//but values get changed based on the condition
console.log("*****Using map ******")
let grades=scores.map(score=>(score>70?"PASS":"FAIL"))
console.log(grades)


//filter - keeps elements which only satisfy the condition(only elements which pass a test)
console.log("*****Using filter ******")
let passedScores=scores.filter(score=>score>70)
console.log(passedScores)

//reduce-accumalates to a single value
let totalSum=scores.reduce((a,b)=>a+b,5)//354(sum of all array value)+5(initial value) = 359
console.log(totalSum)

//flat - flattens nested arrays
let nested=[1,[3,[3,[4,5,10]]]]
let flatArr=nested.flat(1)
console.log(flatArr)