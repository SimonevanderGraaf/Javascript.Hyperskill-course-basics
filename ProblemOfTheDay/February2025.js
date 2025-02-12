/*
February 5th:
Given the following JavaScript object:
 */

let school = {
    name: 'ABC High School',
    students: [
        {
            name: 'John',
            age: 20,
            courses: ['Math', 'Physics']
        },
        {
            name: 'Jane',
            age: 19,
            courses: ['English', 'Chemistry']
        }
    ]
}

// Answer:
// Breaking down the Javascript code:

school.name → "ABC High School"
school.students[0].name → "John" (First student's name)
school.students[0].courses[0] → "Math" (First course of the first student)

//Evaluating the Given Options:


// ❌ Option 1:
console.log(school.name[0]); // Incorrect: This accesses only the first character of the school name ('A')
console.log(students[0].school.name); // Incorrect: 'students' is not a standalone variable, it belongs to 'school'
console.log(courses.students[0].courses.name); // Incorrect: 'courses' is inside 'students', not the other way around

// ❌ Option 2:
console.log(school.students.name); // Incorrect: 'students' is an array, not an object with a 'name' property
console.log(school.name.students[0]); // Incorrect: 'school.name' is a string, not an object that can hold 'students'
console.log(school.courses[0].students); // Incorrect: 'courses' does not exist at the 'school' level

// ❌ Option 3:
console.log(name.school); // Incorrect: 'name' is not a defined variable
console.log(name.students[0]); // Incorrect: Same issue as above, 'name' is not defined
console.log(courses[0].students[0]); // Incorrect: 'courses' is inside 'students', not a standalone property

// Correct Options:
// ✅ Option 4:
console.log(school['name']); // Correct: Accesses 'ABC High School'
console.log(school['students'][0]['name']); // Correct: Accesses 'John'
console.log(school['students'][0]['courses'][0]); // Correct: Accesses 'Math'
Explanation: Using bracket notation ([]) works the same as dot notation but is useful when property names are dynamic.

// ✅ Option 5:
    console.log(school.name); // Correct: Accesses 'ABC High School'
console.log(school.students[0].name); // Correct: Accesses 'John'
console.log(school.students[0].courses[0]); // Correct: Accesses 'Math'
Explanation: Uses dot notation, which is the most common way to access properties.


/*
February 10th:
Match the items with the right description:
<scheme>
<login> and <password>
<host>
<port>
<path>
<request parameters>
<anchor>
parameters that are transmitted to the server
allows you to link to a specific part of a web page or document
required for connection within the specified host
these prefixes transmit authentication data for some protocols, if necessary
a way of exchanging data with a resource
indicates the exact address of a particular file or page
the domain name or IP address on which the server or site is located

answer:
<scheme> : a way of exchanging data with a resource
<login> and <password> : These prefixes transmit authentication data for some protocols, if necessary
<host> : The domain name or IP address on which the server or site is located
<port> : Required for connection within the specified host
<path> : Indicates the exact address of a particular file or page
<request parameters> : parameters that are transmitted to the server
<anchor> : allows you to link to a specific part of a web page or document
 */

/*
February 11th:

Write the randomInt function that will return an integer between the minimum and the maximum value.

randomInt(10, 15) // 11
randomInt(10, 15) // 13
randomInt(10, 15) // 15
 */

// Answer:
    function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example calls:
console.log(randomInt(10, 15)); // Output: Random integer between 10 and 15
console.log(randomInt(10, 15)); // Example: 13
console.log(randomInt(10, 15)); // Example: 15
