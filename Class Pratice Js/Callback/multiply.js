function multiply(a, b, cb) {
    cb(a * b);
}
multiply(4, 6, res => console.log(res));
