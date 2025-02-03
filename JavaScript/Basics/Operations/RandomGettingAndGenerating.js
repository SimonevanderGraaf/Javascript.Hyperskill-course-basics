/**
 * Topic: Random: Getting and Generating
 */

/*
Question 1:
How exactly does the Math.floor() method round a number?
 */

// Answer:
// It rounds a number down to the nearest integer.

/*
Question 2:
Rearrange the lines to create a valid JavaScript function that generates a random integer.
Make indentations where expected. (spaces at the lines or not)

let randomValue = Math.random();
let randomNumber = randomValue * max
}
let randomInteger = Math.floor(randomNumber);
return randomInteger;
function getRandomInteger(max) {
 */

// Answer:
    function getRandomInteger(max) {
        let randomValue = Math.random();
        let randomNumber = randomValue * max;
        let randomInteger = Math.floor(randomNumber);
        return randomInteger;
    }

/*
Explanation:
Math.random() generates a random decimal between 0 and 1.
Multiply by max to scale it to a range of [0, max).
Math.floor() rounds down to the nearest integer.
Return randomInteger as the final result.
 */

/*
Question 3:
Match the code snippets and the numbers that can be generated as a result.
 */

Math.random();
(Math.random() * 10) + 5;
Math.floor(Math.random() * 30);
Math.floor(Math.random() * 100) + 10;

6.451487678529537
42
0.3091216188865904
23

// Answer:
Math.random(); // 0.3091216188865904
(Math.random() * 10) + 5; // 6.451487678529537
Math.floor(Math.random() * 30); // 23
Math.floor(Math.random() * 100) + 10; // 42

/*
Question 4:
What can the Math.random() method be used for? Choose one or more options.

Select one or more options from the list

Rounding a number
Accessing a random array element
Generating a random integer
Generating a random floating-point number

Answer:
The Math.random() method can be used for the following:

✅ Generating a random floating-point number
Math.random() returns a random decimal (floating-point) number between 0 (inclusive) and 1 (exclusive).
Example:
console.log(Math.random()); // Output: 0.482937152 (varies each time)

✅ Accessing a random array element
You can use Math.random() to pick a random index in an array.
Example:
let colors = ["red", "blue", "green", "yellow"];
let randomIndex = Math.floor(Math.random() * colors.length);
console.log(colors[randomIndex]); // Output: A random color from the array

✅ Generating a random integer (with additional methods)
Math.random() alone doesn't generate an integer, but when combined with Math.floor(), you can create a random integer
within a specific range.
Example:
function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInteger(10)); // Output: Random integer between 0 and 9

❌ Rounding a number
Math.random() does not round numbers. It only generates random values.
 */

/*
Question 5:
Change the getRandom function so that it returns a random integer from 0 (inclusive) to 5 (exclusive).
Tip: Focus only on the modification of the function such that it returns a random value as per the above description.
This returned value is then processed internally and produces the output as given in the sample output.

function getRandom() {
// Write your code here
}
 */

// Answer:
function getRandom() {
    return Math.floor(Math.random() * 5);
}

/*
Question 6:
Create a getRandom function so that it returns a random integer from 1 to 3 (both inclusive).
 */

// Answer:
function getRandom() {
    return Math.floor(Math.random() * 3) + 1;
}
/*
Explanation:
Math.random() generates a random floating-point number in the range [0, 1).
Multiplying by 3 scales this number to [0, 3).
Math.floor() ensures the result is an integer from 0 to 2.
Adding 1 shifts the range from [0, 2] to [1, 3].
Now, calling getRandom() will return either 1, 2, or 3.
 */

/*
Question 7:
Change the getRomanNumber function so that it returns a random item from the romanNumbers array, starting from the
second element i.e. index 1.
const romanNumbers = ["I", "II", "III", "IV", "V"];
Tip: Modify the function and return the random item from an array except for the first item. The output should be a single item such as: "V".
 */

// Answer:
function getRomanNumber(array) {
    // Write your code here
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return array[getRandomInteger(1, array.length)];
}

