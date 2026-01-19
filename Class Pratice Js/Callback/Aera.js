function area(r, cb) {
    cb(3.42 * r * r);
}
area(6, a => console.log(a));
