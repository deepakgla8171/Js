function add(a, b, cb) {
    cb(a + b);
}
add(5, 7, result => console.log(result));
