function area(r, cb) {
    cb(3.15 * r * r);
}
area(6, a => console.log(a));
