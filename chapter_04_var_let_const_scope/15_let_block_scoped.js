let a2 = 100;//global scope
console.log("Global scope:", a2) // 100

function printHello1() {
    console.log("Hello")
    let a2 = 20;//local scope
    console.log("Inside Function", a2);//20

    if (true) {
        let a2 = 300;//redeclaration is allowed not in other lang(java)
        console.log("Inside If Block", a2)//300
    }
    console.log("outside If Block", a2)//20 - block Scoped
}

printHello1()
console.log("outside function Block", a2)//100 - global value