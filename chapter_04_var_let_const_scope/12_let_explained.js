// let - cannot be redeclared but can be reassigned
let retryCount=0;
retryCount=retryCount+1;
retryCount=retryCount+1;
console.log("retryCount:",retryCount)//2

//let retryCount=12;//Cannot redeclare block-scoped variable 'retryCount'.

//let is block scoped
//{}  - block
//function abc(){}
//for(){}

let testStatus="pending"
if(testStatus==='pending'){
    let executionTime=2000;
    console.log("Inside If Block: "+ executionTime)//2000
}

{
    let executionTime=5000;
    console.log("Inside Block:",executionTime)//5000
}

for(let i=10;i<11;i++){
    let executionTime=1000;
    console.log("Inside for Loop:",executionTime)//1000
}


console.log("Outside If/for block:",executionTime)//ReferenceError: executionTime is not defined

let testStatus1="pending"
testStatus1="done";//can be reassigned