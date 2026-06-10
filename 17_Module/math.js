//What is a Module? A module is a file that contains code (functions, variables, classes) and can export/import it.
//Helps in: Code reuse, Better organization, Avoiding global variables

//Types o
const PI = 3.14

function add(a, b) {
return a + b;

}

function sub(a, b) {
return a - b;
}
export default sub;
export {PI, add} ;