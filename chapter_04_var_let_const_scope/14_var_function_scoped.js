var a1 = 100;//global scope
console.log("Global scope:", a1) // 100

function printHello1() {
    console.log("Hello")
    var a1 = 20;//local scope
    console.log("Inside Function", a1);//20

    if (true) {
        var a1 = 30;//redeclaration is allowed not in other lang(java)
        console.log("Inside If Block", a1)//30
    }
    console.log("outside If Block", a1)//30 - Function Scoped
}

printHello1()
console.log("outside function Block", a1)//100 - global value