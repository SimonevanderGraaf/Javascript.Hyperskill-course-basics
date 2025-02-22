/**
 * Topic: Object Iterator
 */

/*
Question 1:
In JavaScript, you have an array of objects

let arr = [{name: 'Joe', age: 25}, {name: 'Moe', age: 30}, {name: 'Doe', age: 35}];

How can you use an object iterator and the map() method to create a new array of objects where each object has an
additional property 'olderAge' that is 5 years more than the 'age' property of the original objects?
Select one option from the list
*/

let newArr = []; arr.forEach(obj => { obj.olderAge = obj.age + 5; newArr.push(obj); });

let newArr = [...arr]; newArr.forEach(obj => obj.olderAge = obj.age + 5);

let newArr = []; for(let obj of arr) { obj.olderAge = obj.age + 5; newArr.push(obj); }

let newArr = arr.map(obj => ({...obj, olderAge: obj.age + 5}));

// Answer:
let newArr = arr.map(obj => ({...obj, olderAge: obj.age + 5}));

/*
Explanation:
Using map() method:
map() is used to create a new array by transforming each element in the original array.
{ ...obj } (spread operator) creates a shallow copy of the original object.
We add a new property olderAge without modifying the original object.
Why this is correct?
It does not modify the original array (arr).
It creates a new array (newArr) with updated objects.
Ensures immutability, which is a best practice in JavaScript.
Output:
[
    { name: 'Joe', age: 25, olderAge: 30 },
    { name: 'Moe', age: 30, olderAge: 35 },
    { name: 'Doe', age: 35, olderAge: 40 }
]

Why Other Options Are Incorrect?
Option 1 (Using forEach with push()):
let newArr = [];
arr.forEach(obj => { obj.olderAge = obj.age + 5; newArr.push(obj); });
Incorrect because it modifies the original objects inside arr (mutation).
obj.olderAge = obj.age + 5; directly alters each object in arr.
Option 2 (Using forEach on a spread copy):
let newArr = [...arr];
newArr.forEach(obj => obj.olderAge = obj.age + 5);
Still modifies the original objects because newArr = [...arr] only creates a shallow copy of the array, not the objects inside it.
Option 3 (Using for..of loop):
let newArr = [];
for(let obj of arr) {
    obj.olderAge = obj.age + 5;
    newArr.push(obj);
}
Modifies the original array (arr) because obj references the same object in memory.
 */

/*
Question 2:
In the code below you have a function named sumTheArrays. It will receive an object with the following structure:

{
  'even': [...],
  'odd': [...]
}

Each array will have 5 integers in it. Your task is to sum each of the respective odd and even numbers by their index,
and return the result in a single array of size 5.

Sample Input 1:
{"even":[2,4,6,8,10],"odd":[1,3,5,7,9]}

Sample Output 1:
[ 3, 7, 11, 15, 19 ]

Write a program in JavaScript starting with:
function sumTheArrays(naturalNumbers) {
  return ...;
}
 */

// Literal answer exercise:
function sumTheArrays(naturalNumbers) {
    // Use map to sum corresponding elements from 'even' and 'odd' arrays
    return naturalNumbers.even.map((num, index) => num + naturalNumbers.odd[index]);
}

// Fully explained answer:
function sumTheArrays(naturalNumbers) {
    // Use map to sum corresponding elements from 'even' and 'odd' arrays
    return naturalNumbers.even.map((num, index) => num + naturalNumbers.odd[index]);
}

// Sample Input
const input = {"even": [2, 4, 6, 8, 10], "odd": [1, 3, 5, 7, 9]};

// Output
console.log(sumTheArrays(input)); // [3, 7, 11, 15, 19]

/*
Code Explanation:
Access even and odd arrays using naturalNumbers.even and naturalNumbers.odd.
Use .map() on the even array:
num represents the current element from even.
index is used to fetch the corresponding element from odd.
We sum both values at that index.
Return a new array containing the sums.

Why This Approach?
✔ Uses .map(), which is efficient and concise.
✔ Does not modify the input object.
✔ Ensures the output is always an array of size 5.
 */

/*
Question 3:
What will be the output of the following code:
*/

const people = {
  'person1': 'Kate Ferguson',
  'person2': 'Frederick Dixon',
  'person3': 'Victor Johnston'
};

console.log(people.keys());

/*
Select one option from the list

SyntaxError

[ 'Kate Ferguson', 'Frederick Dixon', 'Victor Johnston' ]

undefined

TypeError
 */

// Answer: TypeError

/*
Explanation:
In JavaScript, keys() is a method available on arrays and objects through Object.keys(), but it does not exist directly on objects.

Error in the Code:

const people = {
  'person1': 'Kate Ferguson',
  'person2': 'Frederick Dixon',
  'person3': 'Victor Johnston'
};

console.log(people.keys()); // ❌ TypeError
Why?
people is a plain JavaScript object.
Objects in JavaScript do not have a built-in keys() method.
Instead, the correct way to get keys is:
console.log(Object.keys(people));
 */

/*
Question 4:
Look at the products object below:

const products = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49
};

Complete the missing parts in the code below that includes the getProductPrices() function and logs the
following message in the console:

apple: $1.99
banana: $0.99
orange: $2.49

Fill in the three dots with the relevant elements
function getProductPrices(products) {
    return Object....(products)....(([product, price]) => {
        return ${...}: $${...};
    }).join('\n');
}
const prices = getProductPrices(products);
console.log(prices);
 */

// Answer:
const products = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49
};

function getProductPrices(products) {
    return Object.entries(products).map(([product, price]) => {
        return `${product}: $${price.toFixed(2)}`;
    }).join('\n');
}

const prices = getProductPrices(products);
console.log(prices);

/*
Explanation of the Missing Parts:
Object.entries(products)
Converts the object into an array of key-value pairs:
[
  ['apple', 1.99],
  ['banana', 0.99],
  ['orange', 2.49]
]
.map(([product, price]) => { return ${product}: $${price}; })
Destructures each key-value pair from the array.
Formats the output as "product: $price".
join('\n')
Joins the formatted strings into a single string with line breaks.
 */

/*
Question 5:
Assume that you have a contacts object like this:

const contacts = {
    "John Doe": {
        email: "john.doe@example.com",
        phone: "+1 123 456 7890"
    },
    "Jane Smith": {
        email: "jane.smith@example.com",
        phone: "+1 234 567 8901"
    },
};

Complete the function below that uses the entries() method to iterate over this object and prints a detailed contact list.

Fill in the three dots with the relevant elements
function printContactInfo(contacts) {
    Object....(contacts)....(([name, info]) => {
        console.log(Name: ${name}, Email: ${info.email}, Phone: ${...});
    });
}
 */

// Answer:
const contacts = {
    "John Doe": {
        email: "john.doe@example.com",
        phone: "+1 123 456 7890"
    },
    "Jane Smith": {
        email: "jane.smith@example.com",
        phone: "+1 234 567 8901"
    },
};

function printContactInfo(contacts) {
    Object.entries(contacts).forEach(([name, info]) => {
        console.log(`Name: ${name}, Email: ${info.email}, Phone: ${info.phone}`);
    });
}

// Call the function
printContactInfo(contacts);

/*
Explanation of the Missing Parts:
Object.entries(contacts)
Converts the contacts object into an array of key-value pairs:
[
  ["John Doe", { email: "john.doe@example.com", phone: "+1 123 456 7890" }],
  ["Jane Smith", { email: "jane.smith@example.com", phone: "+1 234 567 8901" }]
]
.forEach(([name, info]) => { ... })
Iterates over the array using destructuring:
name → Contact's name ("John Doe", "Jane Smith")
info → Object containing email and phone.
Inside console.log()
${name} → Outputs the person's name.
${info.email} → Accesses the email field.
${info.phone} → Accesses the phone field.
 */

/*
Question 6:
In the code below there is a function named getTheSquare. This function will receive an array with three objects in it; each object has two keys source and square.

Your task is to take the value of the source key and calculate its square root and store the result in the square key.

You don't need to print anything, just return the arrayOfObjects.

Sample Input 1:

[{"source":16,"square":null},{"source":64,"square":null},{"source":121,"square":null}]
Explain code
Sample Output 1:

[
  { source: 16, square: 4 },
  { source: 64, square: 8 },
  { source: 121, square: 11 }
]

Write a program in JavaScript
function getTheSquare(arrayOfObjects) {
    return arrayOfObjects;
}

Explanation of the Code Logic:
The function getTheSquare receives an array of three objects, where:

Each object has two properties:
"source" → A number whose square root we need to calculate.
"square" → Initially null, where we store the computed square root.
Example Input:

[
  { "source": 16, "square": null },
  { "source": 64, "square": null },
  { "source": 121, "square": null }
]
Processing:

For each object in the array, calculate Math.sqrt(source).
Update the square key with the computed value.
Expected Output:

[
  { source: 16, square: 4 },
  { source: 64, square: 8 },
  { source: 121, square: 11 }
]

JavaScript Implementation:
*/

function getTheSquare(arrayOfObjects) {
    return arrayOfObjects.map(obj => ({
        ...obj,
        square: Math.sqrt(obj.source) // Compute square root and update square key
    }));
}

// Sample Input
const input = [
  { source: 16, square: null },
  { source: 64, square: null },
  { source: 121, square: null }
];

// Calling the function
const output = getTheSquare(input);
console.log(output);

/*
How the Code Works:
Uses .map() to iterate over arrayOfObjects and return a new array with updated values.
Spreads obj ({ ...obj }) to keep all original key-value pairs.
Computes square root using Math.sqrt(obj.source) and assigns it to square.
Returns the updated array.
 */

