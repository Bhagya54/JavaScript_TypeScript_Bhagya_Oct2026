if ("Hello") console.log("String is truthy")
if (12) console.log("String is truthy")
if ({}) console.log("String is truthy")
if ([]) console.log("String is truthy")
if ("0") console.log("String \"0\" is truthy")

if ("") console.log("Won't print")
if (0) console.log("Won't print")
if (-0) console.log("Won't print")
if ('') console.log("Won't print")
if (NaN) console.log("Won't print")
if (null) console.log("Won't print")
if (undefined) console.log("Won't print")

let name = 0;
if (name) {
    console.log("HI")
}
else {
    console.log("Bye")
}