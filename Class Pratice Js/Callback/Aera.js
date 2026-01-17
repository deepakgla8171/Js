function area(r, cb) {
    cb(3.25 * r * r);
}
area(6, a => console.log(a));
