function rev(str, cb) {
    cb(str.split("").reverse().join(""));
}
rev("hello", r => console.log(r));
