/**
 Topic: Introduction to objects
 */

/*
Question 1:
In JavaScript, what will the following code output, taking into account that `replacer` function is being used
during transformation of an object into JSON using `JSON.stringify()`?
 */

let person = {name: 'John', age: 30, city: 'New York'};
function replacer(key, value) {
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}
JSON.stringify(person, replacer);

//answer:
/*
The replacer function is called for each key-value pair:
key = "name", value = "John":
typeof value === 'string' evaluates to true, so the function returns undefined. This key-value pair is excluded.
key = "age", value = 30:
typeof value === 'string' evaluates to false, so the function returns 30. This key-value pair is included.
key = "city", value = "New York":
typeof value === 'string' evaluates to true, so the function returns undefined. This key-value pair is excluded.

The resulting object after applying the replacer is:
 */

{ age: 30 }
// The JSON.stringify() function converts this resulting object into a JSON string.

/*
Question 2:
Select all the correct options to create an empty object.
*/

let user = {};
let user = ();
let user = {none};
let user = {name: undefined};
let user = {name: ""};
const user = {};
const user = ();

// Answer:
let user = {};
const user = {};

/*
Question 3:
Given an object 'person', write a single line of code to add a new property 'age' with the value 30 to it.
Use dot notation in your answer.
 */

// Answer:
person.age = 30;

/*
Question 4:
A lot of errors are hidden in the code below. Find and fix them all!

let song(
  name: "Twinkle, Twinkle, Little Star",
  author: Jane Taylor,
  date: 1806,
);
 */

// Answer:
let song={ // ( changed to ={
    name: "Twinkle, Twinkle, Little Star",
    author: "Jane Taylor", // added ""
    date: 1806 // removed the comma
}; // changed ) to }

/*
Question 5:
Suppose you need to know the price of the product. Print this object property to the console.
 */

let product = {
    name: "Smart Clock",
    price: 48.7
};

// Answer:
console.log(product.price);

/*
Question 6:
Write code that can be used to remove the coordinates property from the map object.
 */

// Answer:
delete map.coordinates;

/*
Question 7:
Create an object named robot with the following properties:

model with the value "RX9000"
year with the value 2024
canDance with the value true.
 */

// Answer:
let robot = {
    model: "RX9000",
    year: 2024,
    canDance: "true"
};


