/**
 Topic: Arithmetic Operators
 */

/*
Question 1:
What is the output of the following JavaScript code?
*/

var a = "5";
var b = 2;
var c = "3";
console.log((a * b) + (b * c));
console.log(b + c);
console.log(a + b);

// Answer:
/*
First console.log: (a * b) + (b * c)
a * b: The string "5" is implicitly converted to a number. The calculation becomes 5 * 2, which is 10.
b * c: The string "3" is also implicitly converted to a number. The calculation becomes 2 * 3, which is 6.
The result is 10 + 6, which equals 16.
Output: 16

Second console.log: b + c
b is a number (2), and c is a string ("3").
The + operator performs string concatenation when one operand is a string. The result is "2" + "3", which is the string "23".
Output: 23

Third console.log: a + b
a is a string ("5"), and b is a number (2).
The + operator performs string concatenation because a is a string. The result is "5" + "2", which is the string "52".
Output: 52

Enter the result of the expression:
console.log(2 * (4 + 5 * (6 + 3)));
Answer: 98
 */

/*
Question 2:
What will be the output of the following JavaScript code snippet?
*/

var str1 = '100';
var num1 = 50;
var str2 = '50';
var result = str1 - num1 + str2;

// Answer: 5050


