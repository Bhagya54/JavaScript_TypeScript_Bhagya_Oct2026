console.log(score) //ReferenceError: Cannot access 'score' before initialization
let score=123
console.log(score)

{
    //TDZ - Temporary Dead Zone for score starts here
    //console.log(score)  //ReferenceError: Cannot access 'score' before initialization
    //score=50            //ReferenceError
    //typeof score        //ReferenceError
    //console.log(score)  //ReferenceError
    //TDZ ends here as score has been initialized in the next step
    let score=100;//Declaration reached
    console.log(score)//100(safe to access now)
}