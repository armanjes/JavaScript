/**
✅ Variables and Data Types:
Variables are containers for storing data values.
JavaScript has "dynamic typing", meaning you "don't need to specify data types" when declaring variables.

we use var, let, const keyword to declare variables
🚀 var -> function scope
🚀 let, const -> block scope (es6)
*/

var name = "jon doe"
console.log(name);

var digit = 111
console.log(digit);


/*
✅ Common data types include:

✅ primitive data types
🚀 Strings (e.g., 'Hello, world!', "JavaScript", `hello world`)
🚀 Numbers (e.g., 10, 3.14, -55)
🚀 Booleans (true or false)
🚀 undefined (e.g., variable that hasn't defined or value assigned)
🚀 null (e.g., absence of any object value)
🚀 symbol 
🚀 bigInt
🚀 use typeof or typeof() to know data type
🔥 stored directly in "stack" and accessed

✅ non-primitive or reference data types
🚀 Objects (e.g., { name: 'John', age: 30 }) //datatype object
🚀 Arrays (e.g., [1, 2, 3], ['apple', 'banana', 'orange']) //datatype object
🚀 functions
🔥 stored in "heap" and accessed by reference 
*/


console.log(typeof name);
console.log(typeof (digit));

var yes = true
var yes1 = 'true'
var no = false
console.log(typeof (yes), typeof (yes1), typeof (no));

// stack
let person = 'john'
let newPerson = person
newPerson = 'jonathan'
console.log(person ,newPerson);

var digitArray = [1, 2, 3]
console.log(typeof digitArray);

var details = {
    name: "jack",
    age: 19
}

console.log(typeof details);

// heap
let personDetail = details
personDetail.name = "brad"
console.log(details ,personDetail);