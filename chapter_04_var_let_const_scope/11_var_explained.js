var a=10;//Global Scope
console.log("Global scope:",a)//10

function printHello(){
    //console.log(a)//10
    var a=20;//local scope - redeclared
    console.log("Inside Function:",a)//20

    if(true){
        var a=30;//local scope - redeclared
        console.log("Inside if block:",a)//30
    }

    for(var a=50;a<60;a++){

    }
    //var is function-scoped - var ignores block scope (if, for, while),
    //After the block ends, the variable still exists because it belongs 
    //to the entire function,not the if/for block
    console.log("Outside for loop:",a)//60
}

printHello()
console.log("Global Scope:",a)//10 - global scope as this is not within the function.
a=70;
console.log("Global Scope:",a)//70