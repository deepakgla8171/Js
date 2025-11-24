function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
greet("Deepak", () => console.log("Callback fired!"));
