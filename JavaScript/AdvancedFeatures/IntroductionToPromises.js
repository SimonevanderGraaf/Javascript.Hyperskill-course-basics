/**
 * Topic: Introduction to Promises
 */

/*
Question 1:
Write down the result value of the following promise:
*/

const a = 25;
const b = 13;
const c = 37;

new Promise(function(resolve, reject) {
  const value = a + b - c;
  if (value > 0) {
    resolve(value);
  } else {
    reject(-value);
  }
  console.log(2);
});

// Answer: 1

/*
Question 2:
Imagine that you want to study at a prestigious University, and you have to pass the math exam with a score no less
than 90. For the function passingExam, create a promise that returns "You are enrolled!" in case of success,
and "Sorry, you haven't passed the Math exam" otherwise.

Sample Input 1:
80

Sample Output 1:
Sorry, you haven't passed the Math exam

Write a program in JavaScript

function passingExam (myPoints) {
	return new Promise(function() {
    // write your function here
  });
}
 */

// Answer:
function passingExam(myPoints) {
    return new Promise(function(resolve, reject) {
        if (myPoints >= 90) {
            resolve("You are enrolled!");
        } else {
            reject("Sorry, you haven't passed the Math exam");
        }
    });
}

// Example usage:
passingExam(80)
    .then(message => console.log(message)) // Handles success
    .catch(error => console.log(error));   // Handles failure

/*
Explanation:
Creating a Promise:
The function passingExam(myPoints) returns a new Promise.
A Promise takes a callback function with two parameters: resolve (for success) and reject (for failure).
Checking the Score Condition:
If myPoints is 90 or more, we call resolve("You are enrolled!"), meaning the Promise is fulfilled.
If myPoints is less than 90, we call reject("Sorry, you haven't passed the Math exam"), meaning the Promise is rejected.
Using .then() and .catch():
.then(message => console.log(message)) runs if the Promise resolves (passes the exam).
.catch(error => console.log(error)) runs if the Promise rejects (fails the exam).
 */

/*
Badly subscribed question 3:
Complete the creation of the checkingText function that returns a Promise. The function should resolve the promise if
the provided status is "success", and reject the promise if the status is "fail".
 */

// First attempt:
const checkingText = (status) => {
    return new Promise(function(resolve, reject) {
        if (checkingText) {
            resolve("succes");
        } else {
            reject("fail");
        }
    });
}

// Correct answer:
const checkingText = (status) => {
    return new Promise(function (resolve, reject) {
        if (status === "success") {
            resolve("Your text is correct");
        } else {
            reject("Your text is incorrect");
        }
    });
};

/*
Question 4:
Declare a promise named dataLoader that returns the text "An error occurred" in case of failure.
 */

// Answer:
const dataLoader = new Promise((resolve, reject) => {
    // Simulate an error condition and reject the promise
    reject("An error occurred");
});
