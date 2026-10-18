// undefined -> JS sets it: variable declared but no value assigned yet
// null      -> YOU set it: intentionally "no value" / empty

// 1. Declared but not assigned -> undefined
let score;
console.log(score)//undefined

// 2. Intentionally empty -> null
let winner=null
console.log(winner)//null

// 3. typeof
console.log(typeof score)//undefined
console.log(typeof winner)//object (old JS bug, kept for compatibility)

// 4. Missing object property -> undefined
let student={name:"jaasritha"}
console.log(student.age)//undefined

// 5. Function with no return -> undefined
function greet(){}
console.log(greet())//undefined

// 6. Missing function argument -> undefined
function show(x){console.log(x)}
show()//undefined

// 7. Comparison
console.log(null==undefined)//true  (loose: both mean "no value")
console.log(null===undefined)//false (strict: different types)

// 8. In math
console.log(null+1)//1   (null becomes 0)
console.log(undefined+1)//NaN (undefined becomes NaN)
