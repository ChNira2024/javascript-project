//What are Arrow Functions? Arrow functions are a shorter way to write functions using =>.

const greet = () => {
  console.log("Hello");
};

//find square using arrow function
const square = x => x * x;
console.log("square :",square(5)); 

//multiply
const multiply = (a, b) => a * b;
console.log("multiply :",multiply(3, 4));

//no parameter
const sayHi = () => "Hi";
console.log(sayHi());

//multipline function without Arrow Function
function sum(a, b)  {
  const result = 2 + 3;
  console.log("result :",result);
  return result;
};
console.log("sum :",sum(4,5));

//multipline function with Arrow Function
const sumed = (a, b)  => {
  const result = 7 + 7;
  console.log("result :",result);
  return result;
};
console.log("sumed :",sumed(4,5));

//returning object
const getUser = () => ({ name: "Niran", age: 25 });
console.log("getUser :",getUser());

//array function with map
const numsList = [1, 2, 3];
const squares = numsList.map(n => n * n);
console.log("squares :",squares);

//array function with filter
const numsFilter = [1, 2, 3, 4];
const evens = numsFilter.filter(n => n % 2 === 0);
console.log("evens :",evens);

//array function with reduce
const numsReduce = [1, 2, 3];
const summ = numsReduce.reduce((acc, n) => acc + n, 0);
console.log("summ :",summ);

//difference between ==0 and ===0
//== only check the value where === check value as well as type of variale
"5" == 5  // true
"5" === 5  // false

const checkEvenLoose = (n) => n % 2 == 0;
const checkEvenStrict = (n) => n % 2 === 0;
console.log(checkEvenLoose("4"));   // true  <- JS converts the text "4" to a number automatically
console.log(checkEvenStrict("4"));  // false <- JS stops it because it's text, not a number