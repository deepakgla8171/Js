function area(r, cb) {
    cb(3.41 * r * r);
}
area(6, a => console.log(a));
