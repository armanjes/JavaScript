/**
Control Flow:
Conditional statements:
    ✅ if, else if, else
    ✅ switch, case, default
        switch (expression) {
    case value1:
        // code block executed if expression equals value1
        break;
    case value2:
        // code block executed if expression equals value2
        break;
    // Add more cases as needed
    default:
        // code block executed if expression does not match any case
    }

    ✅ Ternary operator (condition ? valueIfTrue : valueIfFalse)
    🚀 nested Ternary operator (
        condition1 ? value1 :
        condition2 ? value2 :
        condition3 ? value3 :
        default value
        )
*/

let age = 10
if (age >= 18) {
    console.log("valid voter");
}
else {
    console.log("Arrest");
}

let CheckVoter = age >= 18 ? console.log("valid voter") : console.log("Arrest");

let num = 10;
if (num >= 0 && num <= 10) {
    console.log(`${num} is between 0 and 10`);
}

else if (num > 10 && num < 21) {
    console.log(`${num} is between 11 and 20`);
}

else {
    console.log(`${num} is greater than 20`);
}

let num1 = 8;
let message = (num1 >= 0 && num1 <= 10) ? `condition 1` :
    (num1 > 10 && num1 < 21) ? `condition 2` :
        `condition 3`

console.log(message);

//let num = 18;
switch (num) {
    case (num >= 0 && num <= 10):
        console.log(`${num} is between 0 and 10`);
        break;
    case (num > 10 && num < 2):
        console.log(`${num} is between 11 and 20`);
        break;
    default:
        console.log(`${num} is greater than 20`);
}


/*
✅ Operators:
    Arithmetic operators (+, -, *, /, %)
    Assignment operators (=, +=, -=, *=, /=, %=)
*/

/*✅ Comparison operators (==, ===, !=, !==, <, >, <=, >=)
(
    in js == is used for comparing values of a variables and its ignores data types
    in other hand === checks both value and data types

    also true for != and !==
)*/

let i = 5; // number
let j = "5"; // string
// console.log(i == j);
// console.log(i === j);

// let x = 10; // number
// let y = "10" // string
// console.log(x != y);
// console.log(x !== y);

/*
✅ Logical operators (&& (and), || (or), ! (not))
*/