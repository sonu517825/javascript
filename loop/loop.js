/*

for statement (loop)

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

A for statement looks as follows:

for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

*/

for (let step = 0; step < 3; step++) {
    console.log('for loop running...', step);
}

console.log()

/*

do...while statement (loop)

The do...while statement repeats until a specified condition evaluates to false.

statement is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ }) to group those statements.)

If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.

*/

let i = 0;
do {
    console.log('do-while loop running...', i);
    i += 1;
} while (i < 3);

console.log()

/*

while statement (loop)

A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.

To execute multiple statements, use a block statement ({ }) to group those statements.

*/

let n = 0;
let x = 0;
while (n < 3) {
    console.log('while loop running...', n);
    n++;
    x += n;
}

console.log()

/*

for...in statement (loop)

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:

*/

const object = {
    a: 4,
    b: 7,
    6: "fgh"
}

const array = [3, 43, "ss",]

for (const key in object) {
    console.log('for-in loop running with object and print its key not object value...', key);
}

console.log()

for (const idx in array) {
    console.log('for-in loop running with array and print its index not array element...', idx);
}

console.log()

/*

for...of statement (loop)

The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

*/


for (const value of array) {
    console.log('for-of loop running with array and print its element not array index...', value);
}

console.log()

console.log('for-of loop not running with object...');
console.log('for-of loop not running with object...');
console.log('for-of loop not running with object...');




