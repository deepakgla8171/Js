let fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
let slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));

Promise.race([fast, slow]).then(result => console.log(result));
// Output: "Fast"
