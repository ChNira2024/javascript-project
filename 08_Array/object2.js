//What is an Object? An object stores data in key–value pairs
const userDetails = {
  name: "Niran",
  age: 25,
  isLoggedIn: true,
};
//Dot Notation
console.log(userDetails.name); // Niran

//Bracket Notation
console.log(userDetails["name"]); // Niran
console.log(userDetails["age"]); // 25

//---------------------------------------------
//Adding / Updating / Deleting
const user = { name: "Niran" };
// Add
user.age = 25;
// Update
user.name = "Raj";
console.log(user);
// Delete
delete user.age;
console.log(user);

//Looping Objects
const userData = { name: "Niran", age: 25 };
for (let key in userData) {
  console.log(key, userData[key]);
}
//======================================================
//Important Object Methods(Object.keys(),Object.values(),Object.entries(),Object.assign(),Spread Operator (...),)
const user1 = { name: "Niran", age: 25 };
console.log(Object.keys(user1)); // ["name","age"]
console.log(Object.values(user1)); // ["Niran", 25]
console.log(Object.entries(user1)); // [["name","Niran"],["age",25]]

//spread operator..
let originalArray = [1, 2, 3];
console.log(originalArray);
console.log(...originalArray);
let copiedArray = [...originalArray];
console.log("copiedArray: ", copiedArray);

let myString = "Hello";
console.log(myString);
console.log(...myString);
let stringArray = [...myString];
console.log("stringArray: ", stringArray);

let mergedArray = [...originalArray, ...stringArray];
console.log("mergedArray :", mergedArray);

const user2 = { name: "Niran" };
const updatedUser = { ...user2, age: 25 };
console.log("spread operator:updatedUser :", updatedUser);

//Rest Operator (`...`): used to collect multiple vales into a single variable.
//it is useful when working with an unknown or variable number of arguments.
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
   // return total; //ans: 3
  }
  return total; //ans:9
}
console.log("Rest operator: ",sum(3, 2, 4));

// Rest operator with Objects
let person = {
name: "Alice",
age: 25,
city: "New York"
}
let {name, ...restOfPerson} = person;
console.log("name of RestOperator: ",name);
console.log("rest data of RestOperator: ",restOfPerson);

//Nested Objects
const user3 = {
  name: "Niran",
  address: {
    city: "Hyderabad",
    pin: 500032,
  },
};
console.log(user3.address.city);

//Object with Functions (Methods)
const user4 = {
  name: "Niran",
  greet: function () {
    return "Hello " + this.name;
  },
};
console.log(user4.greet());
