/**
 * Looping statements:
✅ for loop
(
    for (start; condition; increment){
        print
    }
)

✅ while loop
    (
        start variable
        while(condition){
            print
            increment (variable++)
        }
    )
✅ for...in loop (for iterating over object properties)
✅ for...of loop (for iterating over iterable objects like arrays)
 */

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let j = 1
while (j < 11) {
    if (j % 2 != 0) {
        console.log(j);
    }
    j++
}
