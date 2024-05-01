/**
✅ Functions:
🚀 Functions are blocks of reusable code.
🚀 They can take parameters and return values.

*/

// 🚀 defining a function
function call() {
    console.log(`hello world`);
}
// 🚀 calling or invoking a function
call()

function call() {
    return `hello world`
}
console.log(call());

// 🚀 we can store a function reference in a variable
let print = call
console.log(print());
print = call()
console.log(print);

// ✅ parameters & arguments
// 🚀 we can pass any data type in arguments according to requirement

function addition(n1, n2) {
    // here n1 and n2 are parameters
    return n1 + n2
}
//here 10, 10 are arguments
console.log(addition(10, 10));

// 🚀 we can also pass an array or object as argument

function name(params) {
    for (const i of params) {
        console.log(i);
    }
}
let arr = [1, 2, 3, 4, 5, 6]
name(arr)

function name(params) {
    for (const key in params) {
        console.log(`${key}: ${params[key]}`);
    }
}
let obj = {
    name: 'xyz',
    age: 123
}
name(obj)

// ✅ default parameter

function userLogIn(user = 'bot') {
    return `${user} logged in.`
}

console.log(userLogIn());
console.log(userLogIn('arman'));

// ✅ rest operator ( ...parameterName )
// 🚀 we can pass "n" numbers of arguments using rest operator and the output will be in form of an array
// 🚀 and the rest operator has to be the last parameter

function numberArray(...numbers) {
    console.log(numbers);
}

numberArray(1, 2, 3, 4, 5)

function numberArray2(one, ...numbers) {
    console.log(one, numbers);
}

numberArray2(1, 2, 3, 4, 5)

function numberArray3(one, two, ...numbers) {
    console.log(one, numbers);
    console.log(two);
}

numberArray3(1, 2, 3, 4, 5)

function addition(...nums) {
    let total = 0
    for (const i of nums) {
        total += i
    }
    console.log(total);
}

addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


// 🚀 passing objects in a function using rest operator
function display(...users) {
    console.log(users);

    for (const user of users) {
        console.log(user);

        for (const key in user) {
            console.log(user[key]);
        }
    }
}

let user = {
    name: 'arman',
    id: 1
}

let user2 = {
    name: 'arman',
    id: 2
}

let user3 = {
    name: 'arman',
    id: 3
}

display(user, user2, user3);


// ✅ Declaration vs Expression

// 🚀 function declaration is traditional function and hoisted

// hoisting
// console.log(addDollarSign(100));

function addDollarSign(param) {
    return `$ ${param}`
}
console.log(addDollarSign(100));

// 🚀 function Expression is stored in a variable, anonymous and not hoisted 

let addPlusSign = function (val) {
    return `+ ${val}`
}
console.log(addPlusSign(100));

// ✅ arrow functions
// 🚀 Functions can be declared as arrow functions (=>) introduced in ES6.

let add = (a, b) => a + b;

console.log(add(10, 10));