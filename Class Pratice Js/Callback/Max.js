function max(a, b, cb) {
    cb(Math.max(a, b));
}
max(10, 7, r => console.log(r));
