/*

✅ higher order function are functions that takes one or more functions as "Arguments" or returns a function

🚀 map() -> Executes a provided function once for each array element, creating a new array with the results 

🚀 reduce() -> Executes a reducer function on each element of the array, resulting in a single output value.

🚀 filter() ->  Creates a new array with all elements that pass the test implemented by the provided function

🚀 forEach() -> Calls a function once for each array element

🚀 addEventListener()
🚀 setTimeout/setInterval()

*/

// ✅ forEach() ->  simply iterate over the elements of an array or object 

const socials = ['facebook', 'twitter', 'insta', 'whatsapp', 'threads']
// socials.forEach( (elem, index) => console.log(index, elem));

const socialObject = [
    {
        name: 'twitter',
        url: 'https://www.twitter.com',
        hasAccount: true
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com',
        hasAccount: true
    },
    {
        name: 'insta',
        url: 'https://www.instagram.com',
        hasAccount: true
    }
]

// socialObject.forEach(item => console.log(`${item.name} ${item['url']} ${item.hasAccount}`))

// ✅ filter() -> returns a new modified array. filter() method is designed to work with arrays, not directly with objects. However, you can use it in conjunction with methods like Object.keys() or Object.entries() to filter objects based on certain criteria

const wordArray = ['a', 'bb', 'ccc', 'dddd', 'eeeee']

const result = wordArray.filter(item => item.length >= 2)
console.log(result);
result.forEach(item => console.log(item))

// ✅ map()

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const doubledNum = numArr.map(n => n * 2)  
console.log(doubledNum);

// ✅ reduce()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = arr.reduce((pre, curr) => {
    return pre + curr
}, 0)
console.log(sum);

const obj = {
    js: "javascript",
    cpp: "c++",
    py: "python"
}

for (const [i, val] in obj) {
    console.log(i)
}