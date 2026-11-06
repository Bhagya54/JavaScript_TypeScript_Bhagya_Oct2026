let a = { status: "pass" };

console.log(`Way 1 of accessing status value: ${a.status}`);
console.log(`Way 2 of accessing status value: ${a["status"]}`);

let b=a;
console.log(b.status);//pass - b as well points to same object
b.status="fail" //update the value of the object
console.log(a.status);//after update - a.status value as well becomes false


if(b===a){
    console.log(true)//true as both a and b refers to same object
}
else{
    console.log("false")
}