/**
 * Topic: Array
 */

/*
Question 1:
What will be the output of the following code in the console?

let numbers = [1, 2, 4, 6, 7, 10, 5];
console.log((numbers.length) - 1);
 */

// Answer: 6

/*
Question 2:
Length of array
What is the length of the fruits array?

let fruits = []
 */

// Answer: 0

/*
Question 3:
Given this array of movies:

let movies = ['Avatar', 'Inception', 'Parasite', 'The Dark Knight', 'Joker'];
Explain code
Match the operations performed on the array to the correct output.

Answer:
movies[5]: Undefined
movies[1]: Inception
movies[3]: The Dark Knight
movies[0]:Avatar
 */

/*
Question 4:
Create an array called myFirstArray and assign its first position a value of 10.
You don't need to print or return anything; declare the array and assign the value.
 */

// Answer:
let myFirstArray = [10]

/*
Question 5:
Finding the sum and average of array elements
Given an array of numbers, you're asked to find the sum and average of the numbers. The algorithm you will implement
should also be able to print this result in the console. This task should be accomplished by reordering the lines of
JavaScript code provided to you.

Drag the lines or use the arrows on the right to change the order. Use the buttons on the left to change the indentation
console.log(output);

let numbers = [3, 5, 8, 2, 10];
let avg = sum / numbers.length;
let output = `The sum of the array is ${sum} and the average is ${avg}.`;
let sum = numbers.reduce((acc, val) => acc + val, 0);
 */

// Answer:

/*
Question 6:
Given an array of numbers, you're asked to find the sum and average of the numbers. The algorithm you will
implement should also be able to print this result in the console. This task should be accomplished
by reordering the lines of JavaScript code provided to you.

Drag the lines or use the arrows on the right to change the order. Use the buttons on the left to change the indentation

let sum = numbers.reduce((acc, val) => acc + val, 0);
let numbers = [3, 5, 8, 2, 10];
console.log(output);
let avg = sum / numbers.length;
let output = The sum of the array is ${sum} and the average is ${avg}.;
*/

// Answer:
let numbers = [3, 5, 8, 2, 10]; // Step 1: Define the array
let sum = numbers.reduce((acc, val) => acc + val, 0); // Step 2: Calculate the sum using reduce()
let avg = sum / numbers.length; // Step 3: Calculate the average
let output = `The sum of the array is ${sum} and the average is ${avg}.`; // Step 4: Create output message
console.log(output); // Step 5: Print the result

/*
Explanation of Fixes:
Define the array: let numbers = [3, 5, 8, 2, 10];
Compute the sum:
The reduce() method iterates over numbers, accumulating the sum.
acc (accumulator) starts at 0, and each val (array element) is added to it.
Calculate the average:
Divide sum by numbers.length.
Format the output message:
Using template literals (`...`) to insert values dynamically.
Print the result:
console.log(output); displays the message in the console.
 */

/*
Question 7:
Alex and his four friends have been given marks in Computer Science. Now, Alex wants to compare his marks with those
of his friends by using an Array to store their marks. Specifically, he wants to get the difference between his mark
(stored as the first element of the Array) and his best friend's mark (stored as the last element of the Array).
Can you help Alex to do this?

The function is already defined for you. An array will be given as an argument to this function; you don't need to create an array.
Complete the code below and use console.log() to output the result; you don't need to call the function.

Sample Input 1:
34 56 23 54 43

Sample Output 1:
-9

Sample Input 2:
12 34 6 7 0

Sample Output 2:
12

Sample Input 3:
30 40 50 60 70

Sample Output 3:
-40

Sample Input 4:
0 0 0 0 0

Sample Output 4:
0
 */

// Answer:
function getDifference(marks) {
    console.log(marks[0] - marks[marks.length - 1]);
}

/*
Explanation of Code:
Access the first element:
marks[0] → This represents Alex's mark (first element in the array).
Access the last element:
marks[marks.length - 1] → This represents his best friend's mark (last element in the array).

Calculate the difference:
marks[0] - marks[marks.length - 1]
Print the result:
console.log(difference);

Example Walkthrough:
Input: [34, 56, 23, 54, 43]
First element (34)
Last element (43)
Difference: 34 - 43 = -9
Output: -9

Input: [12, 34, 6, 7, 0]
First element (12)
Last element (0)
Difference: 12 - 0 = 12
Output: 12

Input: [30, 40, 50, 60, 70]
First element (30)
Last element (70)
Difference: 30 - 70 = -40
Output: -40

Input: [0, 0, 0, 0, 0]
First element (0)
Last element (0)
Difference: 0 - 0 = 0
Output: 0
 */

/*
Question 8:
What values will an array contain if created using the line of code below?
 */

let newArray = new Array(4);

// Answer: [undefined, undefined, undefined, undefined]

/*
Question 9:
Finish writing the checkData function. It should accept a data structure and check whether it's an array or not.
Use console.log() to print the result.

Sample Input 1:
array

Sample Output 1:
false
 */

// Answer:
function checkData(data) {
    const result = Array.isArray(data);
    console.log (result);
    return result;
}

/*
Question 10:
In JavaScript, consider the following array:
let myArray = [1, 2, 3];

Which of the following code snippets correctly defines an arrow function to modify the array by removing
the first element and adding '5' and '6' to the end of the array?

let modifyArray = arr => { arr.shift(); arr.push(5, 6); return arr; };

let modifyArray = arr => { arr.pop(); arr.push(5, 6); return arr; };

let modifyArray = arr => { arr.splice(0,1); arr.push(5, 6); return arr; };

let modifyArray = arr => { arr.shift(); arr.append(5, 6); return arr; };

let modifyArray = arr => { arr.unshift(); arr.push(5, 6); return arr; };
 */

// Answer:
let modifyArray = arr => { arr.shift(); arr.push(5, 6); return arr; };
// and
let modifyArray = arr => { arr.splice(0,1); arr.push(5, 6); return arr; };

/*
Explanation of Each Option:
✅ Option 1 (shift() + push()):
arr.shift(); → Removes the first element from the array.
arr.push(5, 6); → Adds 5 and 6 to the end of the array.
Correct output: [2, 3, 5, 6]

✅ Option 2 (splice() + push()):
arr.splice(0,1); → Removes one element from index 0 (same as shift()).
arr.push(5, 6); → Adds 5 and 6 at the end.
Correct output: [2, 3, 5, 6]
 */