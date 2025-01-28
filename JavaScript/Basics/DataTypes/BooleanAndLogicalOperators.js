/**
 Topic: Boolean and Logical Operators
 */

/*
Question 1:
Declare a variable called bool1. Set the value of this variable to true.
Then, declare a second variable named bool2 and set its value to false.
 */

// Answer:
let bool1 = true
let bool2 = false

/*
Question 2:
Select all correct statements about booleans and logical operators:

Select 1 or more options form the list:

1: The priority of && is higher than the priority of ||
2: There are only three possible values of boolean variables
3: || returns false as soon as it finds the first occurring false
4: The statement 25 > 0 is true
 */

// Answer:
// 1 and 4 are correct

/*
Question 3:
Set the variable bool1 to the value true, bool2 to the value !bool1 and calculate bool3 as bool1 && !bool2.
What is the value of bool3?
 */

// Answer:
bool1 = true;
bool2 = !bool1;
// Since bool1 is true, !bool1 evaluates to false. So, bool2 = false.
    bool3 = bool1 && !bool2;
// bool1 is true.
// !bool2 evaluates to !false, which is true.
// true && true evaluates to true. So, bool3 = true.

/*
Question 3:
Improve the following code using only the parentheses so that the result is true:
*/

statement = false;
console.log(!statement && false || false);

// Answer:
statement = false;
console.log(!statement && false || true);

/*
Question 4:
Consider the following JavaScript code snippet:
*/

let a = "Cyber";
let b = 1;
let c = false;
let d = c || (a === "Cyber" && b == 1);

// What will be the value of the d variable after this code is executed?

// Answer:
/*
Step 1:
a === "Cyber"
a is "Cyber", so the condition a === "Cyber" evaluates to true.

Step 2:
b == 1
b is 1, and == checks for value equality without considering type. Since b is equal to 1, this evaluates to true.

Step 3:
a === "Cyber" && b == 1
Both conditions (a === "Cyber" and b == 1) are true, so the result of the && operation is true.

Step 4:
c || (a === "Cyber" && b == 1)
c is false.
The || (logical OR) operator returns the first truthy value it encounters. Since c is false, the result of the OR operation depends on the second operand, which is (a === "Cyber" && b == 1).
The second operand is true, so the result of the OR operation is true.

The answer is true
 */

/*
Question 5:
What will be the output of the following JavaScript code snippet?
*/

const x = '10';
const y = 10;
const z = true;

console.log((x == y) && z);
console.log((x === y) || !z);

// Answer:
/*
Step 1:
(x == y) && z
x == y:
== checks for value equality, ignoring type.
x is '10' (a string) and y is 10 (a number). JavaScript performs type coercion, so '10' is converted to the number 10.
Since 10 == 10, this evaluates to true.
z:
z is true.
(x == y) && z:
true && true evaluates to true.
Output: true

Step 2:
(x === y) || !z
x === y:
=== checks for both value and type equality.
x is '10' (string) and y is 10 (number). Since the types are different, this evaluates to false.
!z:
z is true, so !z (logical NOT) evaluates to false.
(x === y) || !z:
false || false evaluates to false.
Output: false

The answer is true, false
 */