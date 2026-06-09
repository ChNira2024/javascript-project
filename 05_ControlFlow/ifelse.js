//Control flow: Control flow decides which code runs and when, based on conditions.

//if Statement: Executes code only if condition is true

const age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
}
//if...else: Runs one block if true, another if false
const num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//if...else if...else: Used for multiple conditions
const marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

//Nested if
const ages = 22;
const hasID = true;
if (ages >= 18) {
  if (hasID) {
    console.log("Allowed");
  } else {
    console.log("ID required");
  }
}

let ageIs = 20;
let hasPermission = true;
if (ageIs >= 18) {
  if (hasPermission) {
    console.log("You are allowed to enter");
  } else {
    console.log("You need permission to enter");
  }
} else {
  console.log("You not old enough to enter");
}

// Arrays
let fruits = ["Apple", "banana", "orange"];
let favouriteFruite = "Strawberry";
if (fruits.includes(favouriteFruite)) {
  console.log("Yes");
} else {
  console.log("No");
}

// Objects
let user = {
  name: "Alice",
  isAdmin: false,
};
if (user.isAdmin) {
  console.log("Welcome, Admin");
} else {
  console.log(`Welcome, ${user.name}`);
}
