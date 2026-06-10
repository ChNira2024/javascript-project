//What is Scope? Scope defines where a variable can be accessed in your code
//Types of Scope in JavaScript. 1.Global Scope 2.Function Scope 3.Block Scope

//Global Scope: Variables declared outside any function/block
let name = "Niran";
function show() {
  console.log(name);
}
show(); // Niran

//Function Scope: Variables declared inside a function
function test() {
  let x = 10;
  console.log(x);
}
test(); // 10
//console.log(x); // ❌ Error

//Block Scope: Variables declared using let and const inside {}
if (true) {
  let a = 5;
  const b = 10;
  console.log(a, b);
}
//console.log(a); // ❌ Error


//Scope Chain
let a = 1;
function outer() {
  let b = 2;
  function inner() {
    let c = 3;
    console.log(a, b, c);
  }
  inner();
}
outer();

