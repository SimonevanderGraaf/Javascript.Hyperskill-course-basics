/**
 * Topic: Defining Functions
 */

/*
Question 1:
Choose the option where the IIFE is not declared correctly.

Select one option from the list
*/

function () {
    console.log('Hello!');
}();

(() => {
    console.log('Hello!');
})();

(function () {
    console.log('Hello!');
})();

/*
Answer:

Option 1:
function () {
    console.log('Hello!');
}();
❌ Incorrect - Syntax Error
Issue: A function declaration must have a name (e.g., function myFunc() {}).
Fix: Wrap it inside parentheses to make it an expression, or use an anonymous function inside parentheses:
(function () {
    console.log('Hello!');
})();

Option 2:
(() => {
    console.log('Hello!');
})();
✅ Correct - Valid IIFE (Arrow Function)
This is a valid arrow function IIFE.
The function is wrapped in () and executed immediately.

Option 3:
(function () {
    console.log('Hello!');
})();
✅ Correct - Valid IIFE (Anonymous Function)
This is a correctly wrapped anonymous function.
It executes immediately.
 */

/*
Question 2:
Create an arrow function that returns the Hello world! string and assigns it to the greeting const.
 */

// Answer:
const greeting = () => "Hello world!";

/*
Question 3:
Create an anonymous function that returns the number 10 and assigns it to the createNumber const.
 */

// Answer:
const createNumber = function() {
    return 10;
}

/*
Question 4:
When do we need anonymous functions?
Select one or more options from the list

When we need to create a function with an explicit name for easier reference

When we need to immediately call the created function

When we need to pass a function as a parameter to another function

When we need to use a function only once

Answer:
✅ 1. When we need to immediately call the created function
Reason: Anonymous functions are often used in IIFE (Immediately Invoked Function Expressions) to execute code immediately without polluting the global scope.
Example:
(function() {
    console.log("This runs immediately!");
})();

✅ 2. When we need to pass a function as a parameter to another function
Reason: Anonymous functions are commonly used as callback functions because they don’t need to be referenced elsewhere in the code.
Example:
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

✅ 3. When we need to use a function only once
Reason: If a function is only needed once and does not need a reference elsewhere in the code, an anonymous function is a good choice.
Example:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

Incorrect Answer:
❌ 4. When we need to create a function with an explicit name for easier reference

Reason: If we need to explicitly reference a function multiple times, we should use a named function instead.
Example (Named Function):
function sayHello() {
    console.log("Hello!");
}
sayHello();
 */

/*
Question 5:
In which case will the hoisting mechanism work?
Select one option from the list
*/

greetings();
const greetings = function () {
    return 'Hello world!';
}

greetings();
function greetings () {
    return 'Hello world!';
}

greetings();
const greetings = () => {
    return 'Hello world!';
}

// Answer: The second, t still works because function declarations are hoisted to the top of their scope.
// This means that the function is moved to the top, so when funcOne() is called, the function has already been declared.

/*
Question 6:
Declare an anonymous function that returns the number 5 and pass it to function powFunc as an argument.
 */

// Answer:
function powFunc(fn) {
    console.log(fn()); // Calls the passed function and logs the result
}

powFunc(function() {
    return 5;
});

/*
Question 7:
Create an anonymous function that returns the string John and assign it to the createName const.
 */

// Answer:
const createName = function() {
    return "John";
}

/*
Question 8:
You are provided with several lines of code that are scrambled out of order. These lines define
an anonymous JavaScript function which takes a single argument, concatenates it with a greeting,
and returns the result. There is also a log statement for calling this function with the argument 'Alice'.
Your task is to reorder the lines of code to create a working program that prints 'Hello, Alice!' to the console.

console.log(greet("Alice"));
var greet = function(name) {
};
return "Hello, " + name + "!";
 */

// Answer:
var greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("Alice"));

/*
Question 9:
Select all proper anonymous functions from the list below.
Select one or more options from the list
*/

let greet = function () {
return 'Hello world!'
}

(function () {
return 'Hello world'
})()

let greet = () => 'Hello world!'

function greet () {
return 'Hello world!';
}

/*
Answer:
✅ Option 1:

let greet = function () {
    return 'Hello world!';
};
✔ Correct: This is a valid anonymous function expression assigned to greet.
The function has no name (making it anonymous) and is stored in a variable.

✅ Option 2:

(function () {
    return 'Hello world';
})();
✔ Correct: This is an Immediately Invoked Function Expression (IIFE).
It is anonymous because it has no name and executes immediately.

✅ Option 3:

let greet = () => 'Hello world!';
✔ Correct: This is an arrow function, which is also an anonymous function.

Incorrect Answer (Not an Anonymous Function):
❌ Option 4:

function greet () {
    return 'Hello world!';
}
✖ Incorrect: This is a named function declaration (greet is the function name).

A function must be unnamed to be considered anonymous.
 */