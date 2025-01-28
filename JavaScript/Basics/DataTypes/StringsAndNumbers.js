/**
 Topic: Strings and numbers
 */

/*
Question 1:
Suppose you create an introductory page for various programming languages and their history.
Currently, you are working on detailing JavaScript. You want to display a message about JavaScript and the year
it was released using a multi-line program. You also want this information to be displayed in the user's browser
console each time the webpage is loaded.

Fill in the dots in the code with the data types of the variables name and yearReleased. The last gap expects a
command to print message to the console.

let name = "JavaScript";  // ... data type
let yearReleased = 1995; // ... data type

// Multi-line statement
let message = "The programming language " +
 name + " was released in " + yearReleased + ".";

... (message);
*/

// Answer:
let name = "JavaScript";  // string data type
let yearReleased = 1995; // number data type

// Multi-line statement
let message = "The programming language " +
    name + " was released in " + yearReleased + ".";

console.log (message);

/*
Question 2:
Comment after every line which data type it is and why.
 */

// Answer:
0.1 // Number, reason: 0.1 is a numeric value, represented as a floating-point number in JavaScript.
"1" // Type: String, reason: "1" is enclosed in double quotes, making it a string.
"Hello" // Type: String, reason: "Hello" is a sequence of characters enclosed in double quotes.
55 // Type: Number, reason: 55 is a numeric value, represented as an integer.
true // Type: Boolean, reason: true is a boolean value in JavaScript.
'9' // Type: String, reason: '9' is enclosed in single quotes, making it a string.

/*
Question 3:
Consider the following JavaScript program:
*/
// A simple JavaScript program
// let item1 = '12';
// let item2 = '5';
// let totalString = item1 + item2;
// let totalNumber = Number(item1) + Number(item2);
// /* Prints the string and number totals */
// console.log(totalString);
// console.log(totalNumber);

/*
What are the data types and values of the variables 'totalString' and 'totalNumber', and what are
the two outputs of this program?
 */

// Answer:
// totalString
Data Type: String
Value: '125'
/*
Reason: The + operator concatenates item1 and item2 as strings because both item1 and item2 are strings.
Thus, '12' + '5' results in '125'.
 */
totalNumber
Data Type: Number
Value: 17
/*
Reason: The Number() function converts the string values of item1 ('12') and item2 ('5') into numbers
before performing addition. Thus, 12 + 5 results in 17.
 */

/*
 Question 4:
 Print the number corresponding to your age in the console.
 */

// Answer
let age = 37;
console.log (age);

/*
Question 5:
Write a code that prints the type of these three objects to the console:
"an apple"
631
9.3

Make sure you print the type, not the actual object.
*/

//Answer:
// Declare the objects
let obj1 = "an apple";
let obj2 = 631;
let obj3 = 9.3;

// Print the types to the console
console.log(typeof obj1); // Type of "an apple"
console.log(typeof obj2); // Type of 631
console.log(typeof obj3); // Type of 9.3

 /*
Question 6:
Using the typeof operator, output the data type of the object 555 to the console.
*/

// Answer"
// Declare the object
let obj = 555;

// Output the data type to the console
console.log(typeof obj);

/*
Question 7:

/* This is a multi-line comment. */
// let numStr = '100';
// let num = 20;
// console.log(numStr - num);

// Which of the following statements are correct and incorrect. Why?

    /* and */ were used to mark the beginning and end of a multi-line comment.
    // Correct: The program uses /* to start a multi-line comment and */ to end it, which is valid syntax in JavaScript.

    This code displays the number 80 on the console because JavaScript treats numeric strings as numbers in mathematical operations (except for addition).
    // Correct: When performing subtraction, JavaScript implicitly converts the string '100' (stored in numStr) to a number. The calculation becomes 100 - 20, which equals 80.

    The program results in an error because you can't perform arithmetic calculations with different data types.
    // Incorrect: JavaScript allows arithmetic operations between numeric strings and numbers. In the case of
    // subtraction, it converts the string to a number without error.

    This code displays the string '80' on the console.
    // Incorrect: The result of the subtraction is a number (80), not a string.

    The variable numStr is of type number.
    // Incorrect: The numStr variable is of type string, as it is defined as '100' (enclosed in single quotes).

