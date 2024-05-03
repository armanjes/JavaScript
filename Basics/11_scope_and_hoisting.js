/*
✅ Scope and Hoisting:
🚀 JavaScript has function scope, meaning variables declared inside a function are only accessible within that function.
🚀 Variables declared with var are function-scoped not "block-scoped {}" and are hoisted to the top of their containing function.
🚀 Variables declared with let and const are block-scoped "{}" and are not hoisted.
*/

// ✅ function scope
function name() {
    var x = 10;
    console.log(x);
}
name()
// 🚀 we can't access outside function
console.log(x);

// ✅ block scope
if (true){
    let y = 100
    console.log(y);
}

// ✅ nested scoping or closure
// 🚀 accessing properties of parent in child

function first(){
    let x = 100
    
    function second(){
        console.log(10 + x);
    }

    second()
}
first()

