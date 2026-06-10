//JSON: JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data

//JSON method: JSON.parse(),JSON.stringify(),

//JSON.parse(): Convert JSON string → JS Object
let jsObject = '{"name":"raja","age":39,"city":"hyd"}';
console.log("jsObject: ",jsObject);

let userObject = JSON.parse(jsObject);
console.log("Convert Json String to Js object :",userObject);


//JSON.stringfy() : Convert JS Object → JSON string
const user = { name: "Niran", age: 25 };
const json = JSON.stringify(user);
console.log("Convert Js object to Json:",json);// '{"name":"Niran","age":25}'