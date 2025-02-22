/**
 * Topic: Conditional Operators
 */

/*
Question 1:
Calculate the following. Enter the correct answer in the field.

let a = 30;
let b = 6;
let c;

if (a < 100 && b < 10) {
    c = a * b;
} else if (a < 50 && b < 6) {
    c = a - b;
} else {
   c = a + b;
}

console.log(c);
 */

// Answer: 180

/*
Execution Logic:
a = 30, b = 6
First condition: if (a < 100 && b < 10)
30 < 100 ✅ (true)
6 < 10 ✅ (true)
Since both conditions are true, c = a * b = 30 * 6 = 180
Since the first if condition is met, the other conditions are skipped.
The final value of c = 180, and console.log(c) prints: 180
 */

/*
Question 2:
Please specify the conditions that need to be met for the if block to be executed.

if (...) {
    console.log("Correct output");
}
else {
    console.log("Incorrect output");
}
Explain code
Select one or more options from the list

A: false
B: 18 >=18 && -4 > 100
C: 5 < 6
D: true || 19 < 0
 */

// Answer: C and D

/*
Question 3:
Taming Conditional Ops in JS
Consider the following JavaScript code snippet:

var a = 10; var b = 15; var result = (a > b) ? 'A is greater' : 'B is greater';
Explain code
What are the conditional operators being used here, and what will the value of result be after this snippet is executed?

Select one option from the list

A:cOperators: == and !=, Result: 'B is greater'
B: Operators: > and ?, Result: 'A is greater'
C: Operators: || and &&, Result: 'A is greater'
D: Operators: > and ?, Result: 'B is greater'
 */

// Answer: D

/*
Question 4:
Change the code so that the result of printing will be Anna is going to study at University.
*/

let age = 6;

    if (age < 6) {
        console.log("Anna is a little child");
    } else if (age >= 6 && age < 18) {
    console.log("Anna goes to school");
} else if (age === 18) {
    console.log("Anna is going to study at University");
} else if (age > 18 && age < 22) {
    console.log("Anna studies at University");
} else {
    console.log("Anna works");
}

// Answer: let age = 6 needs to be changed to let age = 18

/*
Question 5:
Imagine you want to go to the pub this evening but look too young. The pub staff knows nothing about your age, so now
you must implement the age-checking procedure.

Set the value of 18 to the variable age. Set the condition of age checking to the condition variable: is your age
less than 18 or not? If so, you must write in the console, Sorry, but you are a minor. If the age is over or equal to 18,
the message is That's ok. You can enter the pub.
*/

// My first wrong answer:

let age = 18

if (age < 18) {
    console.log("Sorry, but you are a minor");
} else (age => 18) {
    console.log("That's ok. You can enter the pub.");
}

// Good answer

let age = 18; // Set the age to 18
let condition = age < 18; // Check if the age is less than 18

if (condition) {
    console.log("Sorry, but you are a minor.");
} else {
    console.log("That's ok. You can enter the pub.");
}

/*
Question 6:
Animal mystery
What will be printed in the console as a result of the following code?

let condition = true;

if (!!!condition) {
    console.log("Cat!");
} else {
    console.log("Dog!");
}

Select one option from the list

A: Cat!
B: Error
C: Mystery
D: Dog!
 */

// Answer: Dog!
/*
Step-by-Step Breakdown:

condition = true
!!!condition needs to be evaluated:
!condition → !true → false
!!condition → !!true → true
!!!condition → !!!true → false
The if statement checks if (false), which fails, so the else block executes, which is Dog!
 */

/*
Question 7:
What do you know about the speed of light and the speed of sound? The speed of light is 299792458 m/s. Set the
speed of light to the light variable, and the speed of sound (343 m/s) to the variable sound.

Using the ternary operator, set the variable lightIsPower as true if the speed of light is greater than the
speed of sound and false, otherwise. Print the variable result in the console.
 */

// Answer:
let light = 299792458
let sound = 343
let LightIsPower = (light > sound) ? true : false;
console.log(LightIsPower);

/*
Question 8:
Fill in the missing dots in the  following conditional statement that builds temperature warning system. If the temperature is below 0 degrees, print "Freezing!". If the temperature is between 0 and 30 degrees, print "Cold!". If the temperature is above 30 degrees, print "Hot!".

let temperature = 15;
let warning;

if (...) {
  warning = "Freezing!";
} else if (temperature <= 30) {
  ... ;
} ... {
  warning = "Hot!";
}

console.log(warning);
 */

// First attempt:
let temperature = 15;
let warning;

if (temperature < 0) {
    warning = "Freezing!";
} else if (temperature <= 30) {
    warning = "Cold!"  ;
} else (temperature > 30) {
    warning = "Hot!";
}

console.log(warning);

// Correct answer:
let temperature = 15;
let warning;

if (temperature < 0) { // Missing part 1: Check if temperature is below 0
    warning = "Freezing!";
} else if (temperature <= 30) {
    warning = "Cold!"; // Missing part 2: Assign "Cold!" to warning
} else { // Missing part 3: Handle temperatures above 30
    warning = "Hot!";
}

console.log(warning);

// Only "else" I had wrong at first.

/*
Explanation of the Fixes:
First if condition:
if (temperature < 0) { warning = "Freezing!"; }
Checks if the temperature is below 0 and assigns "Freezing!".
Second else if condition (fixing ...):
else if (temperature >= 0 && temperature <= 30) { warning = "Cold!"; }
Ensures that it correctly identifies temperatures between 0 and 30.
Final else block (fixing ...):
else { warning = "Hot!"; }
This covers all cases where temperature > 30.
 */