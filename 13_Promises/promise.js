//What is Promise?A Promise is an object that represents the result of an asynchronous operation (future value).
//Promise States:
       //Pending → initial state
       //Fulfilled (Resolved) → success
       //Rejected → failure

//Example:1
const fetchDataHavingSuccessUsingPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const data = {name: "raja", age:"39"} //here u can call a api call
      resolve(data);
    }, 2000);
  });
};
fetchDataHavingSuccessUsingPromise()
  .then(data => console.log(data))   // success
  .catch(err => console.log(err))    // error
  .finally(() => console.log("Done")); // always runs       

//Example:2
const fetchDataHavingSuccessAndFailureUsingPromise = () => {
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
fetchDataHavingSuccessAndFailureUsingPromise()
  .then(data => console.log(data))   // success
  .catch(err => console.log(err))    // error
  .finally(() => console.log("Done")); // always runs       

//---------------------------------------------------------
//Promise Methods: all(), race(),
//Promise.all(): Runs multiple promises in parallel
// Multiple promises
let promise1 = fetchDataHavingSuccessAndFailureUsingPromise();
let promise2 = fetchDataHavingSuccessAndFailureUsingPromise();
let promise3 = fetchDataHavingSuccessAndFailureUsingPromise();

Promise.all([promise1, promise2, promise3])
.then( (data) => {
console. log("All done",data);
})
.catch((error) => {
console.error("Atleast 1 promise failed", error)
});

//Promise.race(): Returns first completed promise
Promise.race([promise1, promise2, promise3])
.then( (data) => {
console. log("Race done",data);
})
.catch((error) => {
console.error("Race failed", error)
});