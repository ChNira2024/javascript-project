//What are Nested Objects & Arrays? When objects contain other objects/arrays OR Arrays contain objects/arrays inside them

//Nested Object
const user1 = {
  name: "Niran",
  address: {
    city: "Hyderabad",
    pin: 500001
  }
};
console.log(user1.address.city); // Hyderabad

//Array Inside Object
const user2 = {
  name: "Niran",
  skills: ["Java", "React", "SQL"]
};
console.log(user2.skills[1]); // React

//Object Inside Array (Very Common in APIs)
const users3 = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
];
console.log(users3[1].name); // B

//Complex Nested Structure
const company = {
  name: "TechCorp",
  employees: [
    {
      name: "Niran",
      skills: ["Java", "React"],
      address: {
        city: "Hyderabad"
      }
    }
  ]
};
console.log(company.employees[0].skills[1]); // React
console.log(company.employees[0].address.city); // Hyderabad

//Looping Nested Data: Loop array of objects
const users4 = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
];
users4.forEach(user => {
  console.log(user.name);
});

//Nested loop
const users5 = [
  { name: "A", skills: ["Java", "JS"] },
  { name: "B", skills: ["React"] }
];
users5.forEach(user => {
  user.skills.forEach(skill => {
    console.log(skill);
  });
});

//Real API Example (Very Important)
const response = {
  status: "success",
  data: [
    { id: 1, name: "Niran" },
    { id: 2, name: "Raj" }
  ]
};
response.data.map(user => console.log(user.name));