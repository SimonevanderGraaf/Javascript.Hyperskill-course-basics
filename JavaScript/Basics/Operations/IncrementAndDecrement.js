/**
 * Topic: Increment and Decrement
 */

/*
Question 1:
Select acceptable ways to reduce the variable n by 1. In other words, the operation should modify the value this variable stores.
 */

n--
--n
n-
-n

// Answer: n-- and --n

/*
Question 2:
What is n?
 */

let n = 0;
++n;
n++;
n++;
console.log(n++);

// Answer: 3. After the console.log(n++) statement, n becomes 4, but that new value is not logged in this statement.

/*
Question 3:
What are the values of y and z after the following operations and why?
 */

let x = 5;
let y = x++;
let z = ++x;

// Answer:
// 'y' is 5 and 'z' is 7 because 'x++' increments 'x' after assigning the value to 'y' and '++x' increments 'x'
// before assigning the value to 'z'

/*
Question 4:
What does the following code print?
*/

let a = -1;
console.log(1 - a++);

// Answer:
// a++ is a post-increment operation, meaning:
// The current value of a (-1) is used first.
// Then, a is incremented after the expression is evaluated. Since a is -1, it substitutes into the expression:
// 1 - (-1)  // Because a is -1 before incrementing
// 1 - (-1) = 1 + 1 = 2
// After the expression is evaluated, a is incremented from -1 to 0, but that does not affect this calculation.

/*
Question 5:
What is the value of variable c?
 */

let a = 300;
let b = a++;
let c = --b;

/*
Answer step by step:
Step-by-Step Execution:
1: Initialize a:
let a = 300;
a is assigned the value 300.

2: Post-increment a++ and assign to b:
let b = a++;

Post-increment (a++) means:
The current value of a (300) is assigned to b first.
Then, a is incremented by 1, making a = 301.
After this step:
a = 301
b = 300

3: Pre-decrement --b:
let c = --b;

Pre-decrement (--b) means:
b is decremented first (300 - 1 = 299).
Then, the new value (299) is assigned to c.
After this step:
b = 299
c = 299

Final values:
a = 301
b = 299
c = 299
 */

/*
Question 6:
What will be the respective values of x, y, and z?
 */

let x = 10;
let y = ++x;
let z = x++;

/*
Answer in steps:
1: Initialize x:
let x = 10;
x is assigned the value 10.

2: Pre-increment ++x and assign to y:
let y = ++x;

Pre-increment (++x) means:
x is incremented first (10 + 1 = 11).
Then, the new value (11) is assigned to y.
After this step:
x = 11
y = 11

3: Post-increment x++ and assign to z:
let z = x++;

Post-increment (x++) means:
The current value of x (11) is assigned to z first.
Then, x is incremented by 1 (11 + 1 = 12).
After this step:
x = 12
z = 11

Final values
x = 12
y = 11
z = 11
*/

/*
Question 7:
Write the sum function that returns the sum of three values of variables, where each is increased by one.
Use variables a, b and c as function parameters.
Remember the difference between prefix and postfix increment.

Sample Input 1:
1 7 -4

Sample Output 1:
7

Sample Input 2:
5 5 5

Sample Output 2:
18
 */

// Answer:
function sum(a, b, c) {
    return (++a) + (++b) + (++c);
}

// When applying to sample 1 and 2:
console.log(sum(1, 7, -4)); // Output 7
console.log(sum(5, 5, 5)); // Output 18

/*
Question 8:
Write the sum function that returns the sum of three variable values, where each is decreased by one.
Use variables a, b and c as function parameters.
Remember the difference between prefix and postfix increment.

Sample Input 1:
10 11 -2

Sample Output 1:
16

Sample Input 2:
1 1 0

Sample Output 2:
-1
 */

// Answer:
function sum(a, b, c) {
    return (--a) + (--b) + (--);
}

// When applying to sample 1 and 2:
console.log(sum(10, 11, -2)); // Output 16
console.log(sum(1, 1, 0)); // Output -1