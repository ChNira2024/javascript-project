//What is a Template Literal? A template literal is a string using backticks ` ` instead of quotes.

// Why use Template Literals?
// Easier string concatenation
// Supports variables directly
// Supports multi-line strings
// Allows expressions inside ${}

// Without Template Literal
const name = "Niran";
const age = 25;
console.log("My name is " + name + " and age is " + age);

//With Template Literal
console.log(`My name is ${name} and age is ${age}`);

//Example: 1
const userName = "Niranjan";
const userAge = 28
console.log(`Hello ${userName}, you are ${userAge} years old`); //Hello Niran

//Example: 2
// Multiline String
let multilineString = `This
is

a
multiline
string `;
console.log(multilineString)


//Example: 3
//Expressions Inside ${}
const a = 10, b = 5;
console.log(`Sum is ${a + b}`);

//Example: 4
const user = "Admin";
const isLoggedIn = true;
const message = `Welcome ${user}, status: ${isLoggedIn ? "Active" : "Inactive"}`;
console.log(message);


//Object
let user1 = {
firstName: "John",
lastName: "Doe"
}
let userInfo = `User Info: Name: ${user1.firstName} ${user1.lastName}`;
console. log(userInfo);

let msg = `i am backtick \n`
console.log(msg);

