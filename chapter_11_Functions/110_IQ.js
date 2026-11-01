let g_x = 10;
//Nested Scope |blocked scope
function outer() {
    let x = 10

    function inner() {
        let y = 20;
        console.log(x);// ✅ Accessible (inner can access outer's variable)
    }
    inner();
    console.log(y)// ❌ Error: y is scoped to inner()
}

outer()