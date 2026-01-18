function area(r, cb) {
    cb(3.35 * r * r);
}
area(6, a => console.log(a));
