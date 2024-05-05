/**
✅ JSON
🚀 JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
🚀 commonly used for transmitting data between a server and a web application as a text string.
🚀 its file extension is .json

example:
{
  "name": "John",
  "age": 30,
  "isStudent": true,
  "friends": ["Alice", "Bob"],
  "spouse": null,
  "address": {
    "city": "New York",
    "country": "USA"
  }
}

🚀 JSON keys are always strings, enclosed in double quotes.
🚀 Values can be any data type.
🚀 JSON data is in the form of key-value pairs separated by commas
*/

// ✅ js object to JSON string
// 🚀 syntax: JSON.stringify(objectName)

const person = {
  name: "John", age: 30
};

const jsonString = JSON.stringify(person)
console.log(jsonString);

// ✅ JSON string to js object
// 🚀 syntax JSON.parse(JSON_String)

const object = JSON.parse(jsonString)
console.log(object);

//✅ The fetch() function in JavaScript is a modern API for making asynchronous network requests (HTTP requests) to servers. It provides a more powerful and flexible way to fetch resources from the web compared to traditional methods like XMLHttpRequest (XHR).The fetch() function in JavaScript is a modern API for making asynchronous network requests (HTTP requests) to servers. It provides a more powerful and flexible way to fetch resources from the web compared to traditional methods like XMLHttpRequest (XHR).


