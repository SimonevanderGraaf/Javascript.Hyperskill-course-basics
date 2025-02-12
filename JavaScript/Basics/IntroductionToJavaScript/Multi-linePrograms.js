/**
 Topic: Multi-line programs
 */

/*
Question 1:
Creating a function to display a greeting message.
Change the dots by filling in the missing code

Example:
// Define a variable and assign a string value
… greeting = "Hello, User!";

// Define a … to display the greeting
function displayGreeting() {
 … (greeting); // greeting works without “ “ because it is the variable that is created
}

// Call the function
displayGreeting();

Result:
*/
// Define a variable and assign a string value
let greeting = "Hello, User!";

// Define a function to display the greeting
function displayGreeting() {
    console.log (greeting); // greeting works without “ “ because is the variable that is created
}

// Call the function
displayGreeting();

/*
Question 2:
Consider the following piece of JavaScript code:

console.log("Hello world.
I am learning;
JavaScript programming.
Having a great time!")

How would you modify it to display the text across multiple lines without causing an error in a proper way?

A. console.log('Hello world. \nI am learning; \nJavaScript programming. \nHaving a great time!')
B. console.log('Hello world. I am learning; JavaScript programming. Having a great time!')
C. console.log('Hello world. // I am learning; // JavaScript programming. // Having a great time!')
D. console.log('Hello world.' + 'I am learning;' + 'JavaScript programming.' + 'Having a great time!')
 */

// Answer:
console.log('Hello world. \nI am learning; \nJavaScript programming. \nHaving a great time!')

/*
Question 3:
How many empty line(s) will the code below print? The answer must be a number, not a word.
*/

console.log("hello");
console.log("");
console.log("...");
console.log("bye");

// Answer: 1

/*
Question 4:
How many lines does the code print to the console in total?
*/

console.log("When the snow flies in my face,");
console.log("I brush it away;");
console.log("");
console.log("when my heart exclaims in my breast,");
console.log("I sing bright and cheery.");

// Answer: 4

/*
Question 5:
Write a program that prints the following text:

I
love
winter
 */

// Answer:
console.log("I");
console.log("love");
console.log("winter");

