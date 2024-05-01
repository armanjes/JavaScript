/*
Objects:
✅ Objects are collections of key-value pairs.
✅ Keys are strings (or symbols) that represent property names, and values can be of any data type.
✅ Object properties can be accessed using dot notation (object.property) or bracket notation (object['property']).
✅ we can loop over object using for...in loop
🚀 use typeof to check data type
🚀 we can store both an array and object inside an object
*/

const obj = {
    name: "xyz",
    age: 19,
    address: "abc 777"
}
// console.log(typeof obj); // object
// console.log(obj); // { name: 'xyz', age: 19, address: 'abc 777' }
// console.log(obj.name); // xyz
// console.log(obj['name']); // xyz

for (const i in obj) {
   //console.log(i); // this will print only keys
   //console.log(obj[i]); // prints values
}

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// console.log(person.name); // Output: John
// console.log(person.age); // Output: 30
// console.log(person.address); // Output: { city: 'New York', country: 'USA' }
// console.log(person.address.city); // Output: New York
// console.log(person.address.country); // Output: USA
for (const key in person) {
    // console.log(typeof person[key]);
}

for (const key in person) {
    if (typeof person[key] === "object") {
        for (const innerKey in person[key]) {
            // console.log(`${key} : ${person[key][innerKey]}`);
        }
    } else {
        // console.log(`${key} : ${person[key]}`);
    }
}

const myObject = {
    otherProperty: 'some value',
    arrayProperty: [1, 2, 3, 4, 5],
    nestedObject: {
        name: 'xyz',
        age: 22
    }
};

for (const key in myObject) {
    if (Array.isArray(myObject[key])) {
        for (const i of myObject[key]) {
            // console.log(`${i}`);
        }
    } else if (typeof myObject[key] === 'object') {
        for (const nestedkey in myObject[key]) {
            // console.log(`${nestedkey}: ${myObject[key][nestedkey]}`);
        }
    } else {
        // console.log(myObject[key]);
    }
}

// ✅ object destructring

const student = {
    name: 'xyz',
    age: 123,
    id: 1100,
    hobby: {
        first: "traveling",
        second: 'exercise'
    }
}

let { name, age, id, hobby: { first, second } } = student;

// console.log(`Name is ${name} and I'm ${age} id is ${id} hobby ${first}.`);

// ✅ Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
// const myVehicle2 = myVehicle
// console.log(myVehicle2);
// myVehicle.color = 'green'
// console.log(myVehicle);
// console.log(myVehicle2);

//🚀 meaning both variables point to the same object in memory. Therefore, any changes made to myVehicle will also affect myVehicle2, and vice versa.


const myVehicle2 = {
    ...myVehicle,
    color: 'pale'
}
console.log(myVehicle2);
// console.log(myVehicle);

//🚀 If you want myVehicle2 to be a separate copy of myVehicle you can use the spread syntax (...) to achieve that.  When you use the spread operator (...) in JavaScript to create a shallow copy of an object or an array, it does not modify the original object or array. Instead, it creates a new object or array with the same properties or elements as the original.In the case of defining the same property multiple times in an object literal,only the last occurrence will be kept.This behavior occurs when you're defining an object literal directly, regardless of whether you're using the spread operator.