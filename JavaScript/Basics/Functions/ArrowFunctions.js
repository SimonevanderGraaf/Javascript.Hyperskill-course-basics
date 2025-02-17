/**
 * Topic: Arrow Functions
 */

/*
Question 1:
Create an arrow function that takes a single number as input and returns the square of that number. The input will be
a single integer on a line. Print the squared result.
 */

// Answer:
const square = (num) => num * num;

console.log(square(num));

/*
Question 2:
Select the arrow functions that are written incorrectly.
Select one or more options from the list

A:let difference = (a, b) => a - b;
B:let difference = (a, b) => { return a - b; };
C:let difference = (a, b) { return => a - b; };
D:let difference => (a, b) = a - b;
 */

// Answer: C and D

/*
Question 3:
Change the code to make it work:

let func1 = () => a / b + a * b;
let func2 = () => c + 5 * d / c;
// change the code above this line
let result = 7 - func1(50, 4) / func2(40, 30);
*/

/* Answer:
The code has an issue because func1 and func2 are defined as arrow functions but do not accept any parameters,
yet they are being called with arguments (func1(50, 4), func2(40, 30)).

Modifying func1 and func2 to accept parameters:
*/
let func1 = (a, b) => a / b + a * b;
let func2 = (c, d) => c + 5 * d / c;

// Now the function calls will work correctly
let result = 7 - func1(50, 4) / func2(40, 30);

console.log(result);

/*
Explanation of Fix:
Added parameters (a, b) to func1, and (c, d) to func2 so they can accept arguments.

Now, func1(50, 4) correctly evaluates to:50/4+50∗4=12.5+200=212.550/4+50∗4=12.5+200=212.5

func2(40, 30) evaluates to:40+(5∗30)/40=40+150/40=40+3.75=43.7540+(5∗30)/40=40+150/40=40+3.75=43.75

Final calculation for result:7−(212.5/43.75)=7−4.8571=2.14297−(212.5/43.75)=7−4.8571=2.1429
*/

/*
Question 4:
Find the mistake in setting the arrow function and fix it:

let func = (a, b) => ( return a * b);
console.log(func(5, 10));
 */

// Answer:
let func = (a, b) => { return a * b; };
console.log(func(5, 10));

/*
Question 5:
Declare the function named multiplication, which takes any two numbers as parameters and returns the result of
their multiplication.
 */

// Answer:
let multiplication = (a,b) => a*b;

/*
Question 6:
Define a function that will add the word captain before the name of a person.
There should be one space after the word captain.
The function should be named captainAdder and accept one parameter name as an argument.
The function should return a string, not print it to the console.
 */

// Answer:
let captainAdder = (name) => {return "captain " + name;};

/*
Question 7:
You are working on a greeting module for your application and you need to implement a function that will create
a personal greeting message. The function should take a single parameter which is the name of the person being greeted.
The message that should be returned is Hello, {name}! This message is from an arrow function. It's important to use
ES6 features where possible. Please rearrange the lines of code to achieve the desired functionality.

Drag the lines or use the arrows on the right to change the order. Use the buttons on the left to change the indentation

let helloArrowFunction = (name) => {
let message = Hello, ${name}! This message is from an arrow function.;
return message;
let result1 = helloArrowFunction('Alice');
console.log(result1);
};
*/

// Answer:
let helloArrowFunction = (name) => {
    let message = `Hello, ${name}! This message is from an arrow function.`;
    return message;
};

let result1 = helloArrowFunction('Alice');
console.log(result1);

/*
Question 8:
Given the knowledge about functions and anonymous functions, which of the following are correct and valid uses
of arrow functions in JavaScript?

A:(a,b) => a*b;
B:let multiply = (a, b) => return a * b;
C:let add = (a, b) => a + b;
D:let square = a => { return a * a }
E:let findMax = (numbers) => { let max = Math.max(...numbers); return max; }
*/

// Answer: C, D en E