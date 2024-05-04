/*
✅ The try statement contains the code that can raise an error.

✅ The catch statement defines a code block to handle any error.

✅ The finally statement defines a code block to run regardless of the result.

✅ The throw statement defines a custom error that catch block can accept.
*/

try {
    addition(1, "a")
} catch (err) {
    console.error(err);
} finally{
    console.log(`Thank you`);
}

function addition(n, m) {
    if (isNaN(n) || isNaN(m)) {
        throw 'you got an error'
        // throw new Error
    }
    else {
        console.log(n + m);
    }
}