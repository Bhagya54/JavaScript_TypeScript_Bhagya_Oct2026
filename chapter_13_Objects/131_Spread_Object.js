let obj1={a:1,b:2}
let obj2={c:3,d:4}
obj1.a=5
let mixed={...obj1,...obj2}
console.log(mixed)