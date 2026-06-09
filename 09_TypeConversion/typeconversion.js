//What is Type Conversion?Converting a value from one data type to another
//Types of Conversion: 1) Implicit Conversion (Type Coercion) 2) Explicit(Manual)

//implicit conversion: JavaScript automatically converts types
console.log("5" + 2); // "52" Number ->String
console.log("5" - 2); // 3 String → Number
console.log(true + 1); // 2 true = 1, 
console.log(false + 1); //1 false = 0

//Explicit Conversion (Manual): You convert types using functions

//String Conversion
const num = 100;
console.log(String(num)); // "100"
console.log( typeof num);


// Number Conversion
console.log(Number("123")); // 123
console.log(parseInt("123px")); // 123
console.log(parseInt("12.5")); // 12
console.log(parseFloat("12.5")); // 12.5

let invalidNum = Number("Hello");
console.log(invalidNum, typeof invalidNum);


//Boolean Conversion
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean("hi")); // true


  
