//What is an Array? An array stores multiple values in a single variable
const num = [1, 2, 3, 4];
console.log("num :", num);
console.log("index of element 2 is :",num[2])

const fruits = ["apple","banana","orange"];
console.log("fruits :", fruits);
console.log("index of element 1 is :",fruits[1])

//forEach() → Loop (No Return): Used to iterate over array and Does NOT return a new array
const nums = [1, 2, 3];
nums.forEach(n => {
  console.log(n);
});

//map() → Transform Data.Creates a new array
const numss = [1, 2, 3];
const doubled = numss.map(n => n * 2);
console.log("Map :",doubled);

function double(num) {
return num * 2;
}
let numbers = [1,2,3,4,5];
let doubleNumbers = numbers.map(double);
console. log("doubleNumbers :",doubleNumbers);

// Using Anonymous Function
let doubleAnonymous = numbers.map(function(num) {
return num * 2;
});
console.log("doubleAnonymous :",doubleAnonymous);

//filter() → Select Data. it Returns elements that match condition
const num1 = [1, 2, 3, 4];
const evens = num1.filter(n => n % 2 === 0);
console.log("filter data :",evens); 

//reduce() → Accumulate Value: Reduces array to a single value
const num2 = [1, 2, 3];
const sum = num2.reduce((acc, n) => acc + n, 0);
console.log(sum); // 6

//forEach() -> execute a function for each array element
numbers.forEach(num => console.log("forEach :",num));

//find() → First Match
const num3 = [10, 20, 30];
const result = num3.find(n => n > 15);
console.log(result); // 20

//some() → At Least One True
const num4 = [1, 2, 3];
console.log(num4.some(n => n > 2)); // true

//every() → All Must Be True
const num5 = [2, 4, 6];
console.log(num5.every(n => n % 2 === 0)); // true

//includes() → Check Value
const num6 = [1, 2, 3];
console.log(num6.includes(2)); // true

//concat() ->merge arrays into an new array
let moreNumbers = [6,7,8]
let newArray = numbers.concat(moreNumbers);
console.log("newArray :",newArray);

//sort() → Sorting
const num7 = [3, 1, 2];
num7.sort((a, b) => a - b);
console.log(num7); // [1, 2, 3]

//splice() vs slice(): slice() retur portion on an array
const arr1 = [1, 2, 3, 4];
console.log(arr1.slice(1, 3)); // [2, 3]

//splice() (modifies original array by removing/replacing elements)
const arr = [1, 2, 3];
arr.splice(1, 1);
console.log(arr); // [1, 3]

const fruitss = ["apple","banana","orange"];
console.log("fruitss :", fruitss);
fruitss.splice(1,1,"mango")
console.log("fruitss :", fruitss); //['apple','mango','orange']

//join() -> Joins aall elements into a string
let fruitsss = fruitss.join (", ");
console.log("fruitsss :", fruitsss);

//reverse() -> reverse theorder of the element
let reverseNumbers = numbers.reverse();
console.log("reverseNumbers :", reverseNumbers);

//sort() -> sort the elements of an array
numbere = [3,1,5,9,4,1]
let sorted = numbers.sort((a,b) => a - b);
console.log("sorted :", sorted);



/*
push(): Adds an element to the end.
pop(): Removes the last element.
shift(): Removes the first element.
unshift():Adds an element to the beginning.
slice(): Copies a portion of an array.
splice(): Adds or removes elements at aspecific index.

*/

//push
const color = ["red","black","yellow","blue","orange"];
console.log("colors :",color);
color.push("green");
console.log("colors :",color);
console.log("length of colors object:",color.length);

//pop
let lastColor = color.pop();
console.log("last color is  :",lastColor);
console.log("colors :",color);

//shift
let firstColor = color.shift();
console.log("first color is  :",firstColor);
console.log("colors :",color);

//unshift
let addFirst = color.unshift("apple");
console.log("added in first place  :",addFirst);
console.log("colors :",color);

//slice(): copies of an array
const slicedColor = color.slice(1,3);
console.log("slicedColor :", slicedColor);

//splice(): add in specif index and return deleted data
let ride = ["cycle","bike","car","sports car"];
const splicedRide = ride.splice(2,3,"flight");
console.log("splicedRide :", splicedRide);




