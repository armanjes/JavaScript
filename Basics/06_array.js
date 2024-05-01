/**
✅ Arrays:
✅ Arrays are ordered collections of values, indexed by integers starting from 0.
They can hold values of different data types.

✅ we can use loops (for loop, while loop and specially for...of loop) on arrays

🚀 array is an object datatype.
🚀 typeof array will return object.
🚀 Array.isArray(arrayName) will return true (boolean value) if its an array.
🚀 we can use negative index in arrays using at()
🚀 we can store both an array and object inside an array which is known as nesting
*/

// ✅
let array = ["one", 2, 3.5, true, false]
console.log(array);
console.log(typeof array); // output object
console.log(Array.isArray(array)); 

// ✅
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// ✅
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
} console.log();

// ✅
for (const i of array) {
    console.log(i);
}

// ✅ we can store an array inside an array.
let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(nestedArray);

for (const i of nestedArray) {
    for (const j of i) {
        console.log(j);
    }
}
console.log();
console.log(nestedArray[1][2]);

// ✅ we can store objects inside an array.
const arrayOfObjects = [
    { name: 'John', age: 30 }, // index 0
    { name: 'Alice', age: 25 }, // index 1
    { name: 'Bob', age: 35 } // index 2
];


console.log(arrayOfObjects[0].name); // Output: John
console.log(arrayOfObjects[1].age); // Output: 25


arrayOfObjects[2].age = 40;
console.log(arrayOfObjects[2].age); // Output: 40

// ✅ Iterating through the array of objects
for (let i = 0; i < arrayOfObjects.length; i++) {
    console.log(arrayOfObjects[i].name + " is " + arrayOfObjects[i].age + " years old");
}


const arr = [10, 20, 30, 40, 50];
console.log(arr.at(-1)); // Output: 50
console.log(arr.at(-2)); // Output: 40
console.log(arr.at(-3)); // Output: 10

// ✅ Arrays have many built-in methods like push(), pop(), shift(), unshift(), splice(), slice(), includes(), indexof(), concat(), etc.

// 🚀 push() used for pushing an element at the last index of an array
const numArray = [10, 20, 30, 40, 50];
numArray.push(100);
console.log(numArray);

// 🚀 unshift() used for pushing an element at the 0 index of an array
numArray.unshift(99)
console.log(numArray);

// 🚀 pop() to retrieve an element from the last of an array
numArray.pop()
console.log(numArray);

// 🚀 shift() for retrieving an element form starting point
numArray.shift()
console.log(numArray);

// 🚀 slice() used for getting a part of an array and it doesn't changes the main array. Since it doesn't changes the main array we need to store it in a variable. In order to get it we need to pass the staring point and ending point

let x = numArray.slice(1, 2)
console.log(x);

// 🚀 splice() it changes the whole array and cut off the the array elements

let y = numArray.splice(1, 5)
console.log(y);
console.log(numArray);

// 🚀 spread operator (...)

let chars = ['a', 'b', 'c', 'd', 'e']
let nums = [1, 2, 3, 4, 5]

let mix1 = [...chars, ...nums]
let mix = [...chars, nums] // difference
console.log(mix1);
console.log(mix);

// 🚀 flat()

mix = [...chars, nums].flat()
console.log(mix);

// ✅  Array Destructuring

let charArray = ['x', 'y', 'z', 'a', 'b']
let [char1, char2, char3, char4, char5] = charArray
console.log(char1);
console.log(char2);
console.log(char5);