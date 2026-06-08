//Arithmetic Operators (+, -, *, /, %)
const a = 10, b = 3
console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);
console.log("Mod:", a % b);
console.log();

//Increment / Decrement
let c = 5;
console.log(c++); // (post-increment)
console.log(++c); // (pre-increment)
console.log();


//Comparison Operators
const d = 10, e = "10";
console.log(d ==e);   // true  (value check)
console.log(d ===e);  // false (value + type check)
console.log(d !=e);   // false
console.log(d !==e);  // true
console.log();

//Logical Operators (&&, ||, !)
const age = 20;
console.log(age > 18 && "Eligible"); // AND
console.log(age < 18 || "Allowed");  // OR
console.log(!(age > 18));   

//Find Largest Using Operators
const f = 10, g = 20;
const max = (f > g) && f || g;
console.log(max);

//---------------------------------
//Even/Odd Using Modulus
const num = 8;
console.log(num % 2 === 0 ? "Even" : "Odd");

// Swap Without Temp (Using Operators)
let h = 5, i = 10;
h = h + i;
i = h - i;
h = h - i;
console.log(h, i);

//Short-Circuit Evaluation
const username = "";
const name = username || "Guest";
console.log(name); // Guest

//Bitwise Operators
const j = 5, k = 3;
console.log(j & k); // AND
console.log(j | k); // OR
console.log(j ^ k); // XOR

//Power Operator (**)
const numPower = 2;
console.log(numPower ** 3); // 8

//Important Interview Tricks
console.log(1 + "2" + 3); "123"

//Ternary operator: (condition ? value1 : value2)
let l = 10;
let message = ( l>5 )? "l is greater than 5" : "l is less than 5"
console.log("ternary msg : ",message);

let herAge = 16;
let category = (herAge < 13) ? "child" : (herAge < 20) ?  "Teenage" : "Adult";
console.log("Category : ", category);
