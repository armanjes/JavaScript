/** 
 * ✅ pure function are functions
 * 🚀 They always produce the same output for the same input, meaning they are  deterministic.
 * 
 🚀 They don't have side effects; they don't modify variables outside their   scope or perform I/O operations.

 🚀 They rely only on their input parameters and do not access global state or external resources.
 */

function sqr(n) {
    return n ** 2
}

console.log(sqr(2));
console.log(sqr(9));