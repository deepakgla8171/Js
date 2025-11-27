let p1 = Promise.resolve("First");
let p2 = Promise.resolve("Second");

Promise.all([p1, p2]).then(result => {
    console.log(result);  // ["First", "Second"]
});
