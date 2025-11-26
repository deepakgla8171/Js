function check(num, cb) {
    cb(num >= 0 ? "Positive" : "Negative");
}
check(-5, res => console.log(res));
