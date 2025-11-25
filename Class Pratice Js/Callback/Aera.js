function area(r, cb) {
    cb(3.14 * r * r);
}
area(5, a => console.log(a));
