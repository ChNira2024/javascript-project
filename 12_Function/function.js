//What is a Function? A function is a block of code designed to perform a task, and it runs when called.
function greet() {
  console.log("Hello");
}
greet(); // calling function

//Types of Functions in JavaScript: Function Declaration, Function Expression, Arrow Function (ES6), Anonymous Function
//Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); //Can be called before declaration (hoisting)

//Function Expression
const adds = function (a, b) {
  return a + b;
};
console.log(adds(2, 3)); //Cannot call before definition

//Arrow Function (ES6)
const addd = (a, b) => a + b;
console.log(addd(2, 3));

//Anonymous Function
setTimeout(function () {
  console.log("Run after delay");
}, 1000);

//===================================================
//Function Parameters & Arguments
function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Niran"));

//Default Parameters
function greet(name = "Guest") {
  return `Hello ${name}`;
}
console.log(greet());

//Rest Parameters
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3));

function calculateSum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  console.log("calculateSum :", sum);
}
calculateSum(2, 4, 7);

//Boolean parameter
function checkEligibility(isMember) {
  console.log(isMember ? "Eligible" : "Not eligible");
}
checkEligibility(true);

//Function with objects as prameters
function printAddress({ street, city, zip }) {
  console.log(`Address: ${street}, ${city}, ${zip}`);
}
printAddress({ street: "ABC", city: "City22" });

//return statement
function getUserInfo() {
  return {
    userName: "name test",
    userAge: "age test",
  };
}
console.log(getUserInfo());
let { userName, userAge } = getUserInfo();
console.log(userName, userAge);

//function return array
function getDimensions() {
  return [200, 300, 500];
}
console.log(getDimensions());
let [width, height, depth] = getDimensions();
console.log(width, height, depth);
//-----------------------------------------

//Without callback: if there is timeout cconcept , then we can't get data immediate... even we call it becoz of timeout
//Example1
console.log("Immediate");
setTimeout(function () {
  console.log("Delay ... ");
}, 2000);

//Example2: fetchData
function fetchData() {
  setTimeout(() => {
    console.log("Data from server ... ");
    return "sample data/response data";
  }, 2000);
}
function processData() {
  let data = fetchData();
  console.log(data); //undefined: can't display data in console immediate becoz of timeout...To solve this by using callback
}
processData();
//===============
//with Callback Function (Very Important)
//callback is a function that is passed as an argument to another function and is executed after perticular event completes..
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    console.log("Data from server with call back ... ");
    let data =  "sample data/response data";
    callback(data)
  }, 2000);
}
function processDataWithCallback(data) { 
  console.log('with call back: ',data); 
}
fetchDataWithCallback(processDataWithCallback);
//---------------------------------------------------------

//Anonymous Callback function
function fetchDataWithAnnonymous(callback) {
  setTimeout(() => {
    console.log("Data from server with call back ... ");
    let data =  "sample data/response data";
    callback(data)
  }, 10000);
}
fetchDataWithAnnonymous(function(data){
  console.log('with annonymous :',data);
  
});

//--------------------------------------
//callback for success / error
function fetchDataWithSuccessError(successCallback, errorCallback) {
  setTimeout(() => {
    let errorOccured = true;
    if (errorOccured) {
          successCallback("Error Occured");
    } else {
      let data = "Sample Data";
      successCallback(data);
    }
  }, 4000);
}
function onSuccess(data) {
console.log("Success, ", data);
}
function onError(data) {
console.log("Error, ", data);
}
fetchDataWithSuccessError(onSuccess, onError);
//-----------------------------------------
//Higher-Order Function: Function that takes another function as argument
function calculate(a, b, operation) {
  return operation(a, b);
}
const result = calculate(2, 3, (x, y) => x + y);
console.log(result);

//Function Scope
function test() {
  let x = 10;
}
//console.log(x); // ❌ error (block scoped)
