/**
 * Topic: Defining Functions
 */

/*
Question 1:
Create the returnNumber function that takes a number as a parameter and returns it.
We recommend defining a function.
 */

// Answer:
function returnNumber(a) {
    return a;
}

returnNumber(10) // 10)

/*
Question 2:
Change the dots to the missing parts of the arrow function to make it return the square of the given number x.

let square ... (...) ... {
  return x * x;
};
 */

// Answer:
let square = (x) => {
    return x * x;
};

/*
Question 3:
Consider the following JavaScript function declarations and expressions. Which of these will correctly log a value due
to function hoisting? Select all that apply.
*/

1:
console.log(calculateArea(5));
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
2:
console.log(computePower(2, 3));
var computePower = (base, exponent) => Math.pow(base, exponent);
3:
console.log(findMax(6, 9));
const findMax = (x, y) => x > y ? x : y;
4:
console.log(multiply(5, 5));
var multiply = function(x, y) {
  return x * y;
}
5:
console.log(square(4));
function square(num) {
  return num * num;
}

/* Answer:

✅ Correctly Logs a Value (Hoisted)
1:

console.log(calculateArea(5));
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
✅ Correct
Function declarations (function calculateArea(radius) {...}) are hoisted entirely, meaning calculateArea is available
before its declaration.

5:

console.log(square(4));
function square(num) {
    return num * num;
}
✅ Correct
Same as case 1, function declarations are fully hoisted.

❌ Errors Due to Hoisting Behavior
2:

console.log(computePower(2, 3));
var computePower = (base, exponent) => Math.pow(base, exponent);
❌ Error: computePower is not a function

computePower is declared with var, so it is hoisted, but only as undefined initially.
    The function assignment happens after the console.log, so calling computePower(2, 3) results in an error.
3:

console.log(findMax(6, 9));
const findMax = (x, y) => x > y ? x : y;
❌ Error: Cannot access 'findMax' before initialization

const (or let) is not hoisted like var.
It is in the Temporal Dead Zone (TDZ) before the declaration, causing an error.
4:

console.log(multiply(5, 5));
var multiply = function(x, y) {
    return x * y;
}
❌ Error: multiply is not a function

Like case 2, var multiply is hoisted as undefined, but the function assignment happens later.
    Calling multiply(5, 5) before assignment results in an error.
*/

/*
Question 4
Given the following function definitions in JavaScript, select the options that properly describe each one.
Select one or more options from the list
*/

myFunction =: function() {}
// This is a named function expression.

let myFunction = function() {}
// This is a function expression.

function myFunction() {}
// This is a function declaration.

let myFunction = () => {}
// This is an arrow function expression.

define myFunction() {}
// This is a valid way to define a function.

/*
Answer:
Option 1:
myFunction =: function() {}
❌ Incorrect Syntax
The =: syntax is invalid in JavaScript.
Correct syntax for a function expression would be:
myFunction = function() {};

Option 2:
let myFunction = function() {};
✅ Correct - This is a function expression.
The function is assigned to a variable, making it a function expression.
The function itself is anonymous (no name after function).
It is not hoisted like function declarations.

Option 3:
function myFunction() {}
✅ Correct - This is a function declaration.
A function declaration is defined using function myFunction() {}.
Function declarations are hoisted, meaning they can be called before they are defined in the code.

Option 4:
let myFunction = () => {};
✅ Correct - This is an arrow function expression.
Arrow functions are a shorthand syntax for function expressions.
They do not have their own this context.

Option 5:
define myFunction() {}
❌ Incorrect - This is not valid JavaScript syntax.
define is not a keyword in JavaScript for defining functions.
The correct way to define a function is using function, an arrow function, or a function expression.
 */

/*
Question 4:
Create the sayHi function that returns the Hello to the console.

We recommend defining a function.
 */

// Answer:
function sayHi() {
    console.log("Hello");
}

/*
Question 5:
Define the double and triple functions in JavaScript to respectively double and triple the input numbers.
Choose the correct code snippets.
Select one or more options from the list
*/

double(x) = function { return x * 2; }
 triple(x) = function { return x * 3; }

function = double(x) { return 2 * x; }
 function = triple(x) { return 3 * x; }

let double = function(x) { return x * 2; }
 let triple = function(x) { return x * 3; }

function double(x) { return 2 * x; }
 function triple(x) { return 3 * x; }

let double = (x) => { return 2 * x; }
 let triple = (x) => { return 3 * x; }

/*
Answer:

Option 1:
double(x) = function { return x * 2; }
triple(x) = function { return x * 3; }
❌ Incorrect - Invalid Syntax
double(x) = function {} is not valid JavaScript syntax.

Option 2:
function = double(x) { return 2 * x; }
function = triple(x) { return 3 * x; }
❌ Incorrect - Invalid Syntax
function = double(x) {} is incorrect because function is not assigned to a variable.

Option 3:
let double = function(x) { return x * 2; };
let triple = function(x) { return x * 3; };
✅ Correct - Function Expressions
This correctly assigns anonymous function expressions to variables.
These functions are not hoisted like function declarations.

Option 4:
function double(x) { return 2 * x; }
function triple(x) { return 3 * x; }
✅ Correct - Function Declarations
Function declarations are hoisted, meaning they can be called before they appear in the code.

Option 5:
let double = (x) => { return 2 * x; };
let triple = (x) => { return 3 * x; };
✅ Correct - Arrow Function Expressions
These are arrow functions, which are a modern and concise way to define functions.
 */

/*
Question 6:
Create the sum function that takes two numbers as parameters and returns their sum.
 */

// Answer:
function sum(a, b) {
    return (a + b)
}

/*
Question 7:
Select all the function declarations.
 */

let sum = function(a, b) {
    return a + b;
}

function sum(a, b) {
    return a + b;
}

function sayHi() {
    alert("Hello");
}

// Answer:
// 2 and 3 are correct function declarations, the first is an anonymous function

/*
Question 8:
Choose the functions that are defined incorrectly.
Select one or more options from the list
*/

let fullname(firstname, lastname) {
      console.log(firstname + " " + lastname);
}

function sayHi() = {
     console.log('Hello world!');
   }

let someName = () => {
     console.log('You called a function someName!');
}

function mult (a, b) {
     return a * b;
}



/*
Answer:
Option 1:
let fullname(firstname, lastname) {
      console.log(firstname + " " + lastname);
}
❌ Incorrect - Invalid Syntax
Functions assigned to variables must use function or arrow function syntax.
Corrected version (Function Expression):
let fullname = function(firstname, lastname) {
    console.log(firstname + " " + lastname);
};
Or using an arrow function:
let fullname = (firstname, lastname) => {
    console.log(firstname + " " + lastname);
};

Option 2:
function sayHi() = {
     console.log('Hello world!');
}
❌ Incorrect - Invalid Syntax
Function declarations (function sayHi()) do not use =.
Corrected version:
function sayHi() {
    console.log('Hello world!');
}

Option 3:
let someName = () => {
     console.log('You called a function someName!');
}
✅ Correct - Valid Arrow Function
This is a correctly defined arrow function.
The function will correctly log the message when called.

Option 4:
function mult (a, b) {
     return a * b;
}
✅ Correct - Valid Function Declaration

This is a proper function declaration.
It correctly takes two arguments and returns their product.
 */