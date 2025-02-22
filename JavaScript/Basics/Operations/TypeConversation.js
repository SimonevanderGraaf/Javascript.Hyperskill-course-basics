/**
 Topic: Type conversation
 */

/*
Question 1:
Provide the code to convert true into a string explicitly.
*/

// Answer:
String(true);

/*
Question 2:
Which of the following expressions will return true?
 */

Boolean("I am false!")
Boolean(0)
Boolean(null)
Boolean("")

// Answer:
Boolean("I am false!")

/*
Question 3:
Select the values that become false in Boolean conversion.
 */

-17
"false"
""
0

// Answer: "" and 0

/*
Question 4:
What is the result of the following expression?
 */

6 - 1 + "4" + 2

// Answer in steps:
/*
Step 1: 6 - 1 = 5
Step 2: 5 + "4" results in the string "54"
Step 3: "54" + 2 results in the string "542"
 */

/*
Question 5:
Convert the string "42" into a number explicitly.
 */

// Answer:
Number("42");

/*
Question 6:
Which of the following expressions will result in NaN?
 */

Number(" 123 ")
Number(true)
Number("")
Number("123abc")

// Answer:
Number("123abc") // will result in NaN

/*
Question 7:
Add the output after each expression.
 */

console.log(Boolean("0")); // Answer: true
console.log(String(0)); // Answer: "0"
console.log(Number("0")); // Answer: 0
console.log(Boolean(0)); // Answer: false

/*
Question 8:
Can the following values change into numbers in case of implicit numeric expression?
 */

0 - false // Answer: yes, 0 - 0 = 0
+"4" // Answer: yes, +"4" = 4
true + true // Answer: yes, 1 + 1 = 2
"33" + 1 // Answer: no

/*
Question 9:
Fill in the answers.

First attempt:
*/
+" " = // 0
String(false) = // "0"
0 && "go" = // 0
Number("\n3") = // 3
true + 1 = // 2
Boolean(1) = // true

// At the second attempt I corrected:
    String(false) = // "false"
