//What is a Closure? A closure is created when a function remembers variables from its outer (parent) scope, even after the outer function has finished execution.

//What’s happening? outer() finishes execution But inner() still remembers count, That memory is called a closure

//Closure = Function + its lexical scope (memory)
//“A closure is a function that has access to its own scope, parent scope, and global scope even after the parent function has executed.”

//Example 1
function createCounter() {
  let count = 0;
  function incrementCount() {
    count++;
    console.log(count);
  }
  return incrementCount;
}
const counter = createCounter();
counter(); // 1
counter(); // 2

console.log("------");

//Example 2
function createCounter2() {
  let count = 0;
  function incrementCount() {
    count++;
    console.log(count);
  }
  function getCount() {
    return count;
  }
  return { incrementCount, getCount };
}
const counter1 = createCounter2();
counter1.incrementCount(); // 1
console.log(counter1.getCount());

//Question: const counter , here counter is a variable?
//Answer: yes, counter is a variable but It stores a function, not a number.
//const counter = outer(); here What happens? outer() runs, It returns inner function .That returned function is stored in counter

/*
const counter = outer(); 

is same as:

const counter = function inner() {
  count++;
  console.log(count);
};

*/

//Real Use Cases : Data Encapsulation (Private Variables)
function bankAccount() {
  let balance = 1000; //private data
  return {
    deposit: (amt) => balance += amt,
    getBalance: () => balance
  };
}
const acc = bankAccount();
acc.deposit(500);
console.log(acc.getBalance()); // 1500 (balance cannot be accessed directly, Only via functions)

//--------------- FUNCTION FACTORIES-----------------
//Example 1 of Function factories
function createGreeting(greeting) {
  return function (name) {
    console.log(greeting + "," + name + " ! ");
  };
}
let sayHello = createGreeting("Hello");
sayHello("Alice");
sayHello("John");

let sayGoodBye = createGreeting("Goodbye");
sayGoodBye("Alice");
sayGoodBye("John");

//Example 2 of Function factories
function multiply(x) {
  return function(y) {
    return x * y;
  };
}
const double = multiply(2);
console.log(double(5)); // 10