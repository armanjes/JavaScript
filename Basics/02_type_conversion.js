// ✅ Type Conversion or Coercion:
// JavaScript performs type conversion (or coercion) automatically when needed.
// parseInt(), parseFloat(), String(), Number(), Boolean() are built-in functions for explicit conversion.

//✅ convert string to number
let amount = "100"

amount = parseInt(amount)
amount = +amount
amount = Number(amount)
console.log(amount)

let decimalNumber = "99.5"
console.log(typeof parseFloat(decimalNumber), decimalNumber);

decimalNumber = parseInt(decimalNumber)
console.log(typeof decimalNumber, decimalNumber);

// 🚀 NaN stands for not a number. data type: number
let name = "xyz";
name = +name;
console.log(name, typeof name); // NaN
console.log(Math.sqrt(-1)); //Nan
console.log(1 + NaN); //Nan
console.log(undefined + undefined); //Nan

// ✅ convert number to string
let price = 100;

price = price.toString();
console.log(typeof price);