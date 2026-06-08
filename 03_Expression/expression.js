const a = 10, b = 25, c = 15;
const largest = (a > b && a > c) ? a : (b > c ? b : c);
console.log("Largest:", largest);
console.log();

const num = 7;
const evenOrOdd = (num % 2 === 0) ? "Even" : "Odd";
console.log("evenOrOdd: ",evenOrOdd);
console.log();

const numm = -5;
const posOrNegative = numm > 0 ? "Positive" : numm < 0 ? "Negative" : "Zero";
console.log("posOrNegative :",posOrNegative);
console.log();

let t = 5, u = 10;
[t, u] = [u, t];
console.log(t, u);
console.log();


const marks = 78;
const grade = marks >= 90 ? "A" :
              marks >= 75 ? "B" :
              marks >= 50 ? "C" : "Fail";
console.log("grade : ",grade);
console.log();

const arr = [10, 20, 5, 40];
const max = Math.max(...arr);
console.log("max is :",max);
console.log();

const nums = 1234;
const reversed = Number([...nums.toString()].reverse().join(""));
console.log("reversed :",reversed);
console.log();


const str = "madam";
const isPalindrome = str === [...str].reverse().join("");
console.log("isPalindrome :",isPalindrome );
console.log();

const fact = n => n === 0 ? 1 : n * fact(n - 1);
console.log("factorial of 5 is :",fact(5));
console.log();


const numData = 123;
const sum = [...numData.toString()]
            .reduce((acc, digit) => acc + Number(digit), 0);
console.log("sum of digit is :",sum);
console.log();

