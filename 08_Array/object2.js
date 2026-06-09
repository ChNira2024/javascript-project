//What is an Object? An object stores data in key–value pairs
const userDetails = {
  name: "Niran",
  age: 25,
  isLoggedIn: true
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
console.log(Object.entries(user1));// [["name","Niran"],["age",25]]

//spread operator..
const user2 = { name: "Niran" };
const updatedUser = { ...user2, age: 25 };
console.log("spread operator:updatedUser :",updatedUser);

//Nested Objects
const user3 = {
  name: "Niran",
  address: {
    city: "Hyderabad",
    pin: 500032
  }
};
console.log(user3.address.city);

//Object with Functions (Methods)
const user4 = {
  name: "Niran",
  greet: function() {
    return "Hello " + this.name;
  }
};
console.log(user4.greet());
