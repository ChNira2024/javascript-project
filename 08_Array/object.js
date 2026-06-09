let person = {
  name: "Alie",
  age: 25,
  isStudent: true,
};
console.log(person);

// Accessing Properties
console.log(person.age);
console.log(person["age"]);

// Adding or Updating Properties
person.age = 66;
console.log(person.age);
console.log(person);

person.job = "Engineer";
console.log(person);
console.log(person.job);

// Deleting Properties
delete person.isStudent;
console.log(person);

// Check if property exist
console.log("name" in person);
console.log(person.hasOwnProperty("age"));

// Nested Objects
let student = {
  name: "Bob",
  courses: {
    math: true,
    science: false,
  },
};
console.log(student);
console.log(student.courses.math);

// Object Destructurin
let {name, courses} = student;
console.log(name);
console. log(courses);

let {name2, courses2} = student;
console.log(name2);
console. log(courses2);