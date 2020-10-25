console.log('start'); // 1

// macro-task
setTimeout(() => console.log("timeout"), 0); // 4

// micro-task
Promise.resolve()
  .then(() => console.log("promise")); // 3

console.log('end'); // 2
