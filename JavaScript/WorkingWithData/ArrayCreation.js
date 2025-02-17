/**
 * Topic: Array Creation
 */

/*
Question 1:
Find the correct method for the function that enablesarrayOfArraysto take three arrays as arguments and create
a new array containing these three arrays. Write the name of the method inside the blank field.

Fill in the 3 dots with the relevant elements
function arrayOfArrays(arr1, arr2, arr3) {
    return Array....(arr1, arr2, arr3);
}
console.log(arrayOfArrays([1, 2], ['a', 'b'], [true, false]));
// Output: [[1, 2], ['a', 'b'], [true, false]]
 */

// Answer:
function arrayOfArrays(arr1, arr2, arr3) {
    return Array.of(arr1, arr2, arr3);
}
console.log(arrayOfArrays([1, 2], ['a', 'b'], [true, false]));
// Output: [[1, 2], ['a', 'b'], [true, false]]

/*
Explanation:
Array.of(...) is a JavaScript method that creates a new array with the provided arguments as elements.
In this case, Array.of(arr1, arr2, arr3) ensures that the three given arrays remain as separate elements inside the resulting array.
 */

/*
Question 2:
Take a look at the code below and select the correct output.
*/

let numbers = Array.of(5);
console.log(numbers.length);
console.log(numbers[1]);

/*
Select one option from the list

A:undefined
B:1 undefined
C:undefined undefined
D:undefined 1


Answer: B, 1 undefined


Explanation:
Array.of(5) creates an array with a single element 5.
The Array.of() method creates a new array containing exactly the arguments provided.
Here, Array.of(5) results in [5].
console.log(numbers.length); prints 1.
The length of [5] is 1, because it contains just one element.
console.log(numbers[1]); prints undefined.
Arrays in JavaScript are zero-based, meaning the first element is at index 0.
numbers[0] is 5, but numbers[1] does not exist, so it returns undefined.
*/

/*
Question 3:
Complete the missing parts in the function createDuplicateArray that takes two parameters: an element and a number n.

The function should return an array of length n, where every element is the given element.

Fill in the dots with the relevant elements
function createDuplicateArray(element, n) {
    return Array(...)....(...);
}
console.log(createDuplicateArray("x", 5)); // Output: ["x", "x", "x", "x", "x"]
 */

// Answer:
function createDuplicateArray(element, n) {
    return Array(n).fill(element);
}
console.log(createDuplicateArray("x", 5)); // Output: ["x", "x", "x", "x", "x"]

/*
Question 4:
What will the output of the following code be?
*/

let arr = Array(3).fill({});

/*
Select one option from the list

A:[ 3, { }, { } ]
B:undefined
C:[ undefined, undefined, undefined ]
D:[ { }, { }, { } ]

Answer: D:[ { }, { }, { } ]
*/

/*
Question 5:
Match the items correct code and result together
Array.of(34, 56);
Array.from(34, 56);
Array.from([34, 56], x % 2);
Array.of();

[34, 56]
SyntaxError
TypeError
[ ]
*/

// Answer:
Array.of(34, 56); // [34, 56]
Array.from(34, 56); // TypeError
Array.from([34, 56], x % 2); // SyntaxError
Array.of(); // [ ]

/*
Explanation:
Array.of(34, 56); → [34, 56]
Array.of() creates a new array with the given arguments as elements.

Array.from(34, 56); → TypeError
Array.from() expects an iterable or array-like object as the first argument. Since 34 is not iterable, it throws a TypeError.

Array.from([34, 56], x % 2); → SyntaxError
This results in a SyntaxError because x % 2 is an invalid function expression. It should be x => x % 2 instead.

Array.of(); → [ ]
Calling Array.of() with no arguments creates an empty array.
 */

/*
Question 6:
Select the correct way of creating an array with the new keyword.
*/

// A:
let names = new [5];

// B:

let names = new Array(2);

// C:
let names = new Array[7];

// D:
let names = Array(3);

/*
Answer: B
Explanation:
D is actually valid JavaScript! But it's not using the new keyword.
Array(3) creates an array with 3 empty slots, just like new Array(3).
However, since this question asks for "creating an array with the new keyword," this is not the correct choice.
 */

/*
Question 7:
How can you create a JavaScript array using literal notation?
Select one option from the list
*/

let arr = (4, 5, 6);

let arr = [4, 5, 6];

let arr = new Array("4", "5", "6");

let arr = Array.of(4, 5, 6)

// Answer:
let arr = [4, 5, 6];

/*
Question 8:

Create a function named createNewArray that accepts three arguments, i.e. value, start, end. Use the fill() method
to create a new array from the originalArr.

Sample Input 1:
3
0
8

Sample Output 1:
[ 3, 3, 3, 3, 3, 3, 3, 3 ]

Write a program in JavaScript:
const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];
// write code here
 */

// Answer:

function createNewArray(value, start, end) {
    // Define the original array
    const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];

    // Use the fill() method to replace values from 'start' to 'end'
    originalArr.fill(value, start, end);

    return originalArr;
}

// Sample Input
console.log(createNewArray(3, 0, 8));
// Output: [3, 3, 3, 3, 3, 3, 3, 3]

/*
Explanation:
Define originalArr:
[3, 6, 0, 1, 4, 6, 8, 112] is the given array.

Modify the array using .fill():
originalArr.fill(value, start, end):
value: The number to replace elements with.
start: The starting index (inclusive).
end: The ending index (exclusive).

Example Execution:
createNewArray(3, 0, 8) fills all positions (from index 0 to 7) with 3.
Result: [3, 3, 3, 3, 3, 3, 3, 3]
 */

/*
Question 9:
The below getArrayWithLength function accepts a string argument. Complete the function to create and return
a new array from the given string using the from() method.

Sample Input 1:
Hello JS Arrays

Sample Output 1:
[
  'H', 'e', 'l', 'l',
  'o', ' ', 'J', 'S',
  ' ', 'A', 'r', 'r',
  'a', 'y', 's'
]
 */

// Answer:
function getArrayWithLength(string) {
    return Array.from(string);
}

getArrayWithLength("Hello JS Arrays");