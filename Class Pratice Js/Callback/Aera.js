function area(r, cb) {
    cb(3.23 * r * r);
}
area(6, a => console.log(a));
