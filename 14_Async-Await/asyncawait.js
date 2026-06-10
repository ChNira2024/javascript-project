//What is Async/Await: async/await was introduced to make Promise-based code easier to read, write, and maintain.

//Use async/await → for sequential logic
//Use Promise.all() → for parallel performance

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    let success = Math.random() < 0.5;  //own condition
    if(success){
        const data = {name: "rama", age:"29"} //here u can call a api call
      resolve(data);
    }
    else{
        reject("error: some reason")
    }
    }, 2000);
  });
};
async function getDataAsync(){
  let data = await getData();
  console.log("data: ",data);
  
}
getDataAsync();


