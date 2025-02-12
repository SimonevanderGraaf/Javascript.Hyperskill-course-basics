/**
 * Topic 1: Comments
 */

/*
Question 1:
Comment unnecessary lines of code to make sure that the result of the output is as follows:
A cat
says
meow
*/

console.log("A dog");
console.log("A cat");
console.log("says");
console.log("quack-quack");
console.log("woof");
console.log("meow");

// Answer:
// console.log("A dog");
console.log("A cat");
console.log("says");
/* console.log("quack-quack");
console.log("woof"); */
console.log("meow");

/*
Question 2:
In programming with JavaScript, consider the three different ways of commenting in the code.
Which type of comments are best used for documentation purposes, and which are best for single-line or disabling code?
Select all correct statements.
*/

// A
/* This is a multi-line comment */ - // should be used for disabling code.
// B
// This is a single-line comment - should be used for documentation purposes.
//C
/** This is a documentation comment */ - // should be used for disabling code.
// D
// This is a single-line comment - should be used for single-line comments.
// E
/** This is a documentation comment */ - // should be used for documentation purposes.

// Answer: A, D and E

/*
Question 3:
Add and/or remove the unnecessary comments to print the following string: four.
*/

console.log("one");
// console.log("One");
/* console.log("two");
console.log("two.");
console.log("three");
//console.log("four");
console.log("Four!");*/
console.log("4");

// Answer:
    /* console.log("one");
    console.log("One");
    console.log("two");
    console.log("two.");
    console.log("three"); */
    console.log("four");
/* console.log("Four!");
console.log("4"); */

/*
Question 4:
Comment unnecessary lines of code to make sure that the result of the output is as follows:

A cat
says
meow
 */

// Answer:
// console.log("A dog");
console.log("A cat");
console.log("says");
/* console.log("quack-quack");
console.log("woof"); */
console.log("meow");

/**
 * Topic 2: Naming Variables
 */

/*
Question 1:
Select all valid variable names.
 */

myName
1day
error_message
red-color

// Answer: myName and error_message are correct.

/*
Question 2:
Remove all invalid characters from $-disabled to make it a valid name for a variable. Enter the result.
 */

// Answer:
$disabled

/*
Question 3:
A student created a name 12-key Code for a variable, but forgot about the camelCase naming convention.
Remove all invalid characters from the name to make it a valid one. Enter the result.
 */

// Answer:
keyCode

/*
Question 4:
The JavaScript naming conventions specify groups of characters that are allowed at the beginning of a variable name.
Which characters cannot be used to start a name?
 */

// Answer: digits

/*
Question 5:
Which of the following words cannot be used to name a variable since they are reserved?
 */

let
age
function
day

// Answer: let and function

/*
Question 6:
Here's the list of variables:
*/

let p = 10;
let login = "username";
let clientName = "Bob";
let coloroftheshirt = "black";

// Some are named according to the naming conventions and best practices, while others are not.
// Select only those variables that have good names.

// Answer: login and clientName