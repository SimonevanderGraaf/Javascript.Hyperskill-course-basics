/**
 Topic: Writing first program
 */

/*
Given a code snippet in JavaScript, your task is to fill in the missing parts to complete the program.
This program should be able to ask the user for their name, age, and country through prompts,
and then print a greeting message that incorporates all these details.

To help you understand how prompt() and parseInt() functions work, consider these examples.

The prompt function in JavaScript is used to display a dialogue box that allows the user to enter input as a string.
If you enter, for example, 5, the iStoreValueFromDialog variable will now store that value.
*/
let iStoreValueFromDialog = prompt("Which value do I need to store?"); // String '5'

// The parseInt function in JavaScript is used to convert a string to an integer.
let nowItIsNumber = parseInt('5'); // Number 5

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
