//behind the scene Java script engine creates a variable greeting with
//undefined value
console.log(greeting); 
var greeting = "Hello!";
console.log(greeting);

//Behind the scene
var greeting = undefined //<--- hoisted with undefined
console.log(greeting);//<--- prints undefined
greeting = "Hello!"; //<----- reassigned the value
console.log(greeting);//<--- prints "Hello!"

// var a;
console.log(a);//undefined
var a = "bhagya";
console.log(a);