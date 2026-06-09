//What are Loops? Loops are used to repeat a block of code multiple times.

//for Loop: Used when you know how many times to run

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Sum of Numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Sum:", sum);

//----------------------------------------
//while Loop: Runs while condition is true

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//Reverse Number
let num = 1234;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log("Reverse number is : ",rev);

//---------------------------------
//do...while Loop: Runs at least once, even if condition is false
let j = 1;
do {
  console.log(j);
  i++;
} while (i <= 5);

//Menu Execution (Real-time use)
let choice;
do {
  console.log("1. Start");
  console.log("2. Exit");
  choice = 2;
} while (choice !== 2);
//----------------------------------------

//break Statement: Stops the loop completely
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
//continue Statement: Skips current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}


//Print Even Numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

//Find First Multiple of 7
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
    // break;
  }
}

let numbers = [1,2,3,4,5,6,7,8];
for (let i = 0; i < numbers.length; i++) {
console. log(numbers[i]);
}