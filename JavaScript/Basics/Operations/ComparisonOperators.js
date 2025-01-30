/**
 * Topic: Comparison Operators
 */

/*
Question 1:
Evaluate the following JavaScript comparisons involving type conversion. What is the output?
*/

let a = '5';
let b = 5;
let result1 = (a == b);
let result2 = (a === b);
console.log(result1, result2);

// Answer: true, false

/*
Question 2:
What is the result of running the following code?
*/

console.log("cat" >= "Cat");

// Answer: true

/*
Question 3:
Write and call a function that displays the result of a strict comparison of the number 5 and the string "5"
in the console.
 */

// Answer:
function strictComparison() {
    console.log(5 === "5");
}

// Call the function:
strictComparison();

/*
Question 4:
What is the result of running the following code?
*/

console.log("Batman" < "Superman");

// Answer: true

/*
Question 5:
What is the result of running the code below?
*/

console.log(null == 0);

// Answer: false

