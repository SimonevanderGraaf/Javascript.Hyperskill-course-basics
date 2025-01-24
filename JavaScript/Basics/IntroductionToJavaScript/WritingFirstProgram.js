/**
 Topic: Writing first program
 */

/*
Part 1: change the dots by filling in the missing code

Example:
let yourName = ...("What's your name?");
let yourAge = ...(prompt("What's your age?"));
let yourCountry = prompt("Where are you from?");
...(`Hello ${yourName}, you are ${yourAge} years old and from ${yourCountry}.`);

Result:
*/
let yourName = prompt("What's your name?");
let yourAge = parseInt(prompt("What's your age?"));
let yourCountry = prompt("Where are you from?");
console.log(`Hello ${yourName}, you are ${yourAge} years old and from ${yourCountry}.`);

/*
Example:
... firstName = "Alice";
const greeting = "Hello, ";
... (greeting + firstName + "!");

Result:
*/
const firstName = "Alice";
const greeting = "Hello, ";
console.log(greeting + firstName + "!");

/*
Part 2: Writing the necessary code for a specific outcome.

Alice has just started learning JavaScript and while studying, she found the following line of code in the console:
This line says "PRINT ME".
Write a program that produces the same output in the console.
Answer:
 */
console.log("This line says \"PRINT ME\".");
// This line says "PRINT ME"

// or

console.log('This line says "PRINT ME”.');
// This line says "PRINT ME"
