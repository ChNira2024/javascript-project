//What is Async/Await: async/await was introduced to make Promise-based code easier to read, write, and maintain.

//Use async/await → for sequential logic
//Use Promise.all() → for parallel performance

//Rule: await Must be inside async block
//------------------------------------------------
const getDataAPI = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("api response:", data);
  } catch (err) {
    console.log("Error:", err);
  }
};
 getDataAPI();

//-------------------------------------------------------------
//Sequential vs Parallel Execution

//Sequential (Slow) : run one after another means always display first response then second response...
const getDataAPI2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const runSequential = async () => {
  try {
    const first = await getDataAPI2();
    const second = await getDataAPI2();

    console.log("Sequential: first :", first);
    console.log("Sequential: second:", second);
  } catch (err) {
    console.log(err);
  }
};
runSequential();

//Parallel(fast) : execution happens at same time. Output order depends on how you handle results. Promise.all preserves order, not timing
const runParallel = async () => {
  try {
    const [first, second] = await Promise.all([
      getDataAPI2(),
      getDataAPI2()
    ]);

    console.log("parallel: first:", first);
    console.log("parallel: second:", second);
  } catch (err) {
    console.log(err);
  }
};
runParallel();

//----------------------------------------------------------------------------
//if promise ddo async then why async/await come? benefits
//Answer: async/await was introduced to make Promise-based code easier to read, write, and maintain.

//Problem with Promises (.then())
/*
fetchUser()
  .then(user => {
    return fetchOrders(user.id);
  })
  .then(orders => {
    return fetchPayment(orders);
  })
  .then(payment => {
    console.log(payment);
  })
  .catch(err => console.log(err));

  //Same Code using async/await
  const process = async () => {
  try {
    const user = await fetchUser();
    const orders = await fetchOrders(user.id);
    const payment = await fetchPayment(orders);
    console.log(payment);
  } catch (err) {
    console.log(err);
  }
};
*/