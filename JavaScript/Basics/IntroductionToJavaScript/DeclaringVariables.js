/**
 Topic: Declaring variables: mutable variables and constants
 */

/*
Question 1: Given the following multi-line JavaScript code, which statements are true? Choose all correct answers.
*/

/* multi-line comment */
var x = 10;
let y = 'Hello, world';
// single-line comment
const z = [x, y];

/*
Select one or more options from the list:
A: The "y" is declared by the "let" keyword and initialized with the string "Hello, world".
B: The variable "x" is not valid because it was declared within a multi-line comment.
C: The "z" constant is not valid because variables cannot be elements of an array.
D: The "x" variable is declared with the "var" keyword and initialized with the numeric value 10.
E: Single-line comments can be created using "//" and multi-line comments can be created using "/*" and "*/

/*
Answer:
    A, D and E are correct

Question 2: What is the correct variable name for representing a user's age in JavaScript, following best practices and camelCase convention?

Answer:
*/
userAge

/*
Question 3:
Consider

/* sample variable declaration */
let a = 'hello';
Explain code

// and

/* sample const variable declaration */
const b = 'world';

/*
As part of a multi-line program, how will the JavaScript runtime treat these statements? And if we try to reassign
a value to b, what will happen?

A: The let statement will define 'a' with 'hello', the const will define 'b' with 'world', and 'b' can be reassigned
with no issues.
B: The let and const keywords are not recognized in JavaScript and will cause an error.
C: Both the let and const statements will define 'a' and 'b' respectively, and reassigning 'b' will lead to a SyntaxError.
D: Both the let and const statements will be ignored due to the presence of comments,
and reassigning to 'b' will have no effect.
E: The let statement will define 'a' with 'hello', theconst will define 'b' with 'world', and a TypeError will be
thrown if we try to reassign the value to 'b'.
 */

// Answer: E

/*
Question 4:
Why doesn't the variable value change to the offline string? Find the error and fix it.

// сhange the code below
const status = "online";
status = "offline";
 */

// Answer:
// сhange the code below
let status = "online";
status = "offline";

/*
Question 5:
Select the correct ways to create a mutable variable:
 */

let a = 4;
const a = "4";
val a = 4;
const a = 4;
const a = '4';
let a = "4";
let a = '4';

// Answer:
let a = 4;
let a = "4";
let a = '4';