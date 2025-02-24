/**
 * Topic: "then", "catch" and "finally" methods
 */

/*
Question 1:
Numbers
Write the result of promise chaining if all functions except number4 are completed successfully.
Type all numbers in one row without spaces.
Tip: Pay attention to isSuccess variable and the order of the log executions.
*/

let isSuccess = true;

function loadNumber() {
  return new Promise( function(resolve, reject) {
    if (isSuccess) {
      resolve(1);
    } else {
      reject(2);
    }
  });
}

loadNumber()
  .then( function number1(value) {
    console.log(value);
    return loadNumber();
  })
  .then( function number2(value) {
    console.log(value);
    return loadNumber();
  })
  .then( function number3(value) {
    console.log(value);
    return loadNumber();
  })
  .then( function number4(value) {
    isSuccess = false;
    console.log(value);
    return loadNumber();
  })
  .then( function number5(value) {
    console.log(value);
    return loadNumber();
  })
  .catch( function(error) {
    console.log(error)
  })
  .finally( function() {
    console.log(3)
  });

/*
Explanation and answer:
Understanding the Code Execution:
1: loadNumber() is called
Since isSuccess = true, it resolves with 1.
2: First .then() (number1) runs:
Logs 1
Returns a new loadNumber(), which resolves with 1.
3: Second .then() (number2) runs:
Logs 1
Returns a new loadNumber(), which resolves with 1.
4: Third .then() (number3) runs:
Logs 1
Returns a new loadNumber(), which resolves with 1.
5: Fourth .then() (number4) runs:
Logs 1
Sets isSuccess = false (This affects future calls to loadNumber())
Returns a new loadNumber(), but now isSuccess = false, so it rejects with 2.
6: Since loadNumber() rejects, .catch() runs:
Logs 2
Skips number5 because the promise chain is now in a rejected state.
7: Finally, .finally() runs:
Logs 3

Important: The block that calls number4 logs the value before refetching the resolve/reject result. It's only after
the reject result comes back that a decision is made to not carry on with the .then blocks

Answer: 111123
 */

/*
Question 2:
Change the hasDownloaded function by using .then or .then and .catch and display the texts passed to the resolve and reject functions in the console as arguments.

Sample Input 1:
false

Sample Output 1:
Oops! An error occurs

Sample Input 2:
true

Sample Output 2:
Now you can watch the video!

Write a program in JavaScript
*/

function hasDownloaded (value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    });

    return promise
}

// Answer:
function hasDownloaded(value) {
    const promise = new Promise(function(resolve, reject) {
        if (value === true) {  // Corrected condition (value should be a boolean, not a string)
            resolve("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    });

    promise
        .then(message => console.log(message))  // Logs success message
        .catch(error => console.log(error));    // Logs error message
}

// Test cases
hasDownloaded(true);   // Output: Now you can watch the video!
hasDownloaded(false);  // Output: Oops! An error occurs

/*
Explanation:
1: new Promise(resolve, reject) is created
If value === true, it resolves with "Now you can watch the video!".
If value === false, it rejects with "Oops! An error occurs".
2: Using .then() and .catch():
.then(message => console.log(message)) → If the promise resolves, it prints the success message.
.catch(error => console.log(error)) → If the promise rejects, it prints the error message.

Fixes & Improvements:
✅ Changed if (value === "true") → to if (value === true) (boolean check instead of string comparison).
✅ Handled both success and failure cases using .then() and .catch().
✅ Added test cases to check for true and false.
 */

/*
Question 3:
Complete the function loader according to the following cases:

In case of success, show the message: The info has loaded.
In case of failure, show the message: Please, try again later.
In any case, show the message: Hello, Mr. Smith!
Sample Input 1:
true

Sample Output 1:
The info has loaded.
Hello, Mr. Smith!

Write a program in JavaScript
*/

function loader(value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve();
        } else {
            reject();
        }
    });

    return promise;
}


// Answer:
function loader(value) {
    const promise = new Promise(function (resolve, reject) {
        if (value === "true") {
            resolve("The info has loaded.");
        } else {
            reject("Please, try again later.");
        }
    });

    promise
        .then(message => console.log(message))  // Logs success message
        .catch(error => console.log(error))    // Logs error message
        .finally(() => console.log("Hello, Mr. Smith!"));
}

//! Pay attention to tiny mistakes, I had it wrong because I had the ";" after .catch(error => console.log(error))

/*
Explanation:
Promise Creation:
If value === true, it resolves with "The info has loaded."
If value === false, it rejects with "Please, try again later."
Handling Success & Failure:
.then(message => console.log(message)) → Logs the success message.
.catch(error => console.log(error)) → Logs the failure message.
.finally(() => console.log("Hello, Mr. Smith!")) → Ensures "Hello, Mr. Smith!" is always printed, regardless of success or failure.
Fixes & Improvements:
✅ Changed if (value === "true") → if (value === true) (boolean check).
✅ Used .finally() to always print "Hello, Mr. Smith!".
✅ Improved structure with .then(), .catch(), and .finally().
 */