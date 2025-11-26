function min(a, b, cb) {
    cb(a < b ? a : b);
}
min(10, 7, r => console.log(r));
