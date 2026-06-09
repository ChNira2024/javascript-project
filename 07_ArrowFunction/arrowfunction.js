//Without Arrow Function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

//With Arrow Function
const adds = (a, b) => a + b;
console.log(adds(2, 3));
//------------------------------

//Without Arrow Function
//button.addEventListener("click", function() {
  console.log("Clicked");
//});

//With Arrow Function
//button.addEventListener("click", () => {
  console.log("Clicked");
//});

//----------------------------------------
//Without Arrow Function
const nums = [1, 2, 3];
const result = nums.map(function(n) {
  return n * 2;
});
console.log(result);

//With Arrow Function
const numss = [1, 2, 3];
const resultt = numss.map(n => n * 2);
console.log(resultt);