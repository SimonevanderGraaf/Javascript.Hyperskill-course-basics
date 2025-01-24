/**
 Topic: functions
 */

/*
Question 1:
Exploring JavaScript function chaining
Consider the following JavaScript code where addNumbers() is a function that receives two parameters,
adds them, and increments the result by 1 using the increment operator. The multiply() is another function that takes
the result of addNumbers() function and multiplies it by 3. What is the result of invoking multiply(addNumbers(5,10))?
 */

function addNumbers(x, y) {
    let sum = x + y;
    sum++;
    return sum;
}

function multiply(num) {
    return num * 3;
}

// Execution of addNumbers (5, 10):
let sum = x + y; // sum = 5 + 10 = 15
sum++;           // sum = 15 + 1 = 16
return sum;      // Returns 16

// Execution of multiply(16)
return num * 3; // 16 * 3 = 48

// The result is 48

/*
Question 2:
What are the parameters in this function?

function sum(a, b) {
    return a + b
}

Answer: a and b


Question 3:
Let's strengthen what you've learned and call the sayHi function.
 */

function sayHi() {
    console.log("Hello");
}
// Write your code below
sayHi();

/*
Question 4:
You're writing a program in JavaScript and you need to create a function that will take two numbers as arguments.
This function needs to perform two operations using the arithmetic operators addition and multiplication.
Calculate the sum and the product of the input numbers, respectively. Then return a string that displays these results
in an understandable format.

Here's a part of the program, but certain parts are missing. Fill the blanks in code to complete the program.
Fill in the dots with the relevant elements

... calculateSumAndProduct(num1, num2) {
const sum = num1 + num2;
const product = num1 * num2;
... "Sum: " + sum + ", Product: " + product;
}

console.log(calculateSumAndProduct(3, 7));
 */

//Answer:
function calculateSumAndProduct(num1, num2) {
    const sum = num1 + num2;
    const product = num1 * num2;
   return "Sum: " + sum + ", Product: " + product;
}

console.log(calculateSumAndProduct(3, 7));

/*
Question 5:
Change the function so that it accepts 2 parameters: city and country.
Sample output: London is the capital of Great Britain
 */

// change the code below this line
function writeSentence() {
    console.log(city + " is the capital of " + country);
}

writeSentence("London", "Great Britain");

//Answer:
function writeSentence(city, country) {
    console.log(city + " is the capital of " + country);
}

writeSentence("London", "Great Britain");

/*
Question 6:
Change the function so that it returns the difference between the number a and the sum of b and c.
Use the return operator; do not output the values to the console.
Sample Input 1:
33 2 1

Sample Output 1:
30

Sample Input 2:
30 20 10

Sample Output 2:
0

function difference(a, b, c) {
    // change it
}
 */

//1:
function difference(a, b, c) {
    return a - (b + c);
}

difference(33, 2, 1);
// Calculation: 33 - (2 + 1) = 33 - 3 = 30

//2:
function difference(a, b, c) {
    return a - (b + c);
}

difference(30, 20, 10);
// Calculation: 30 - (20 + 10) = 30 - 30 = 0

/*
Question 7:
Consider the following JavaScript functions. What will be the logged output when

console.log(multiply(add(2, 3), 4));

is executed?
 */

function add(x, y){
    return x + y;
}

function multiply(x, y){
    return x * y;
}

// Execution of add(2, 3)
function add(x, y) {
    return x + y;
}// 2 + 3 = 5

// Execution of multiply(5, 4)
function add(x, y) {
    return x * y;
} // 5 * 4 = 20

/*
Question 8:
Declare the function named countSquare that takes a number and returns its square.

Sample input 1:
2

Sample output 1:
4

Sample input 2:
1

Sample output 2:
1
 */

// Answer sample 1:
function countSquare(a) {
    return a * a;
}
countSquare(2)

// Answer sample 2:
function countSquare(a) {
    return a * a;
}
countSquare(1)