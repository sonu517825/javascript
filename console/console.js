/*
What is the Console ?

The console is the tool where you can test or check your code is working properly or not.

Remember a console is an object that can access the methods like log() using the dot (.) operator.

*/

/*

console.log()

Mainly used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc. 

*/

console.log('abc');
console.log(1);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2, c: 3 });


/*

console.error()

This method is used to log error message to the console. Useful in testing of code. By default the error message will be highlighted with red color. Only string change the color else all print as it is

*/

console.error('This is a simple error'); // only with red color.
console.error(1);
console.error(true);
console.error(null);
console.error(undefined);
console.error([1, 2, 3, 4]);
console.error({ a: 1, b: 2, c: 3 });

/*

console.warn()

Used to log warning message to the console. By default the warning message will be highlighted with yellow color. Only string change the color else all print as it is

*/

console.warn('This is a simple error'); // only with yellow color.
console.warn(1);
console.warn(true);
console.warn(null);
console.warn(undefined);
console.warn([1, 2, 3, 4]);
console.warn({ a: 1, b: 2, c: 3 });

/*

console.clear()

Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’ while in Firefox no message is returned.

*/

console.clear();

/*

console.time() and console.timeEnd() and console.timeLog()

Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the JavaScript console object. They take a label which must be same, and the code inside can be anything( function, object, simple console). 

*/


console.time('time');

const fun = function () {
    console.log('fun is running');
}

const fun2 = function () {
    console.log('fun2 is running..');
}

fun();
fun2();

console.warn('This is a simple error');
console.warn(1);
console.warn(true);
console.warn(null);
console.warn(undefined);
console.warn([1, 2, 3, 4]);
console.warn({ a: 1, b: 2, c: 3 });

//console.timeEnd('time');

//  OR 

console.timeLog('time');  // for same lable


/*

console.table()

This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table. else all print as it is

*/

console.table('This is a simple error');
console.table(1);
console.table(true);
console.table(null);
console.table(undefined);
console.table([1, 2, 3, 4]); // only table format
console.table({ a: 1, b: 2, c: 3 }); // only table format


/*

console.count()

This method is used to count that how many times run our specific block of code or console.count()

*/

for (let i = 0; i < 5; i++) {
    let y = ""
    console.count(y); // y run 5 times
}



/*

// Grouping Methods 

console.group() and console.groupEnd() and console.groupCollapsed()

group() and groupEnd() methods of the console object allows us to group contents in a separate block, which will be indented. Just like the time() and the timeEnd() they also accepts label, again of same value.

*/

console.group('group');

console.warn('warning here');
console.error('error here');
console.log('log here');
console.warn('warning here');
console.error('error here');
console.log('log here');
console.groupEnd('group');

console.log('out of group');

/*    like this

group
  warning here
  error here
  log here
  warning here
  error here
  log here
out of group

*/

console.group('Different types of programming languages'); // Group Method with parameter             

console.log('JavaScript');
console.log('Java');
console.log('Python');
console.log('C');
console.log('C++');
console.groupEnd(); // GroupEnd Method                                                        

console.groupCollapsed("collaps"); // GroupCollapsed Method without parameter    

console.group('Web development skills'); // Group Method with parameter 
console.log('HTML');
console.log('CSS');
console.log('JavaScript');
console.groupEnd(); // GropEnd Method  

console.log('out of group');

/*


Different types of programming languages
  JavaScript
  Java
  Python
  C
  C++
  Web development skills    // GroupCollapsed here
    HTML
    CSS
    JavaScript


 */



/*

Custom Console Logs

User can add Styling to the console logs in order to make logs Custom . The Syntax for it is to add the CSS styling as a parameter to the logs which will replace %c in the logs as shown in the example below .

add a prefix %c in the log method and pass the style content

*/


const spacing = '10px';
const styles =
    `padding: ${spacing}; background-color: white; color: green; font-style:
		italic; border: 1px solid black; font-size: 2em;`;
console.log('%cSonu Verma', styles);

/*

console.info() :
The console.info() is a method in JavaScript that is used to display the important messages to the console.

as same .log() method

*/


console.info('This is a simple error');
console.info(1);
console.info(true);
console.info(null);
console.info(undefined);
console.info([1, 2, 3, 4]);
console.info({ a: 1, b: 2, c: 3 });

/*

console.assert() :
The assert method only displays the message only if the given expression is false.

Syntax :

console.assert(parameters(Expression, Message);

We can only pass two parameters in the method :

Expression: This is the boolean expression that is true or false can be passed.

Message: This is a string message that displays if the expression is false. You can also pass objects and arrays.

*/

console.assert(0, 'This is a simple error');
console.assert(1, 1);
console.assert(1, true);
console.assert(1, null);
console.assert(0, undefined);
console.assert(1, [1, 2, 3, 4]);
console.assert(1, { a: 1, b: 2, c: 3 });

/*

like this

Assertion failed: This is a simple error
Assertion failed: undefined

*/


/*

console.trace() method

The console.trace() method tracks the execution of the code from starting point to the endpoint and how the code ended at a certain point.

With console.trace, we can print the stack trace of all function call to reach the console.trace statement. The stack trace will be printed in the console.

Use case of console.trace
We can use console.trace in situations where we need to find out how a particular function is being executed.

Sometimes we bind the same method to a different event listener on that case. We can use this while debugging.

*/

function first(val) {
    second(val);
}

function second(val) {
    console.trace("This value in variable val is ", val);
    return val;
}

function main(val) {
    first(val);
}

main(3);
main({ name: "Educative" });

// main — first — second


/*

console.debug();

console.log Black color text with no icon

console.info Blue color text with icon

console.debug Pure black color text

console.warn Yellow color text with icon

console.error Red Color text with icon

*/


console.debug("Console.debug");


/*

console.dir()


console.log(input): The browser logs in a nicely formatted manner

console.dir(input): The browser logs just the object with all its properties

*/

console.dir([1, 2, 3])


/*

console.dirxml() 

same as 

*/

console.dirxml([1, 2, 3])

