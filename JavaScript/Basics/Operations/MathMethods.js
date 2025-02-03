/**
 * Topic: Math Methods
 */

/*
Question 1:
What will this expression return?
*/

Math.round(14.72 * 10) / 10

/* Answer:
Step-by-step evaluation:
Multiply 14.72 by 10: 14.72 × 10 = 147.2
14.72×10=147.2
Apply Math.round(147.2):
Math.round(147.2) rounds 147.2 to the nearest integer, which is 147.
Divide by 10: 147 ÷ 10 = 14.7
147÷10=14.7
 */

/*
Question 2:
Write code in the body of the piFunc function that will get the number Pi from the Math object and round it up to
two decimal places using the method of the Math object. The result of the calculation must be returned by the piFunc function.
 */

// Answer:
function piFunc(){
    return Math.round(Math.PI * 100) / 100;
}

/*
Question 3:
In the body of the pow function, write a method of the Math object that will take two numbers: x and y, passed to
the function as parameters, and raise x to the power of y. The result of the calculation must be returned by the pow function.
 */

// Answer:
function pow(x, y){
    return Math.pow(x, y);
}

/*
Question 4:
Match the methods and their descriptions.
*/

// Answer:
Math.sqrt() // returns the square root of x
Math.pow() // returns x raised to the power of y
Math.ceil() // returns x rounded up to the nearest whole number
Math.abs() // returns the absolute value of x
Math.round() // returns x rounded to the nearest integer (if the fractional part of x is half, it will round up)
Math.sign() // returns 1 if x > 0, returns 0 if x === 0, and -1 if x < 0
Math.floor() // returns x rounded down to the nearest whole number
Math.random() // returns a random number from 0 (inclusive) to 1 (not inclusive)
Math.max() // returns the maximum number of those specified in the arguments
Math.min() // returns the smaller number of those specified in the arguments
Math.trunc() // returns the integer part of x

