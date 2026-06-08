//Two types: Primitives , Reference 


//Primitive: Number, String, Boolean, Undefined, Null

//Number
let age = 70;
console.log("age :", age)
console.log(typeof age);

let agee = 70.7;
console.log("agee :", agee)
console.log(typeof agee);

//String
let namee = "raja"
console.log("namee :", namee)
console.log(typeof namee);

let city = 'hyd'
console.log("city :", city)
console.log(typeof city);

console.log(name+" from "+city);

//Boolean
let hasGraduated = true
console.log("hasGraduated :",typeof hasGraduated);

let isAdmin = false
console.log("isAdmin :",typeof isAdmin);


//undefined
let area
console.log("area :",typeof area);

//Null
let emptyValue = null;
console.log("emptyValue :",typeof emptyValue);




//Reference: Object, Array

//Object : list of data of a perticular user
let user = {
        name: "raja",
        age: 29,
        city: "Hyd"
}
console.log("User Details: "+user.name +" "+user.age+" "+user.city);
user.name = "Raja Rani"
console.log("user details: ", user);
console.log("user details typeof: ", typeof user);

//Array
let fruit =["Apple","Banana","Strawberry"]
console.log("Fruit list : ", fruit);
console.log("Fruit list typesof: ", typeof fruit);

//=================================================
//STATICALLY TYPED (Java language): variable can not chnage their type during the program execution
//int age = 30;
//age = "30"

//DYNAMICALLY TYPED (JavaScript):variable can chnage their type during the program execution
let ageType = 30;
console.log("ageType is :",ageType);
console.log("ageType is typeof:",typeof ageType);
ageType = "30"
console.log("ageType is :",ageType);
console.log("ageType is typeof:",typeof ageType);