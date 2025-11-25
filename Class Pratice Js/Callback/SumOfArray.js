function sum(arr, cb) {
    cb(arr.reduce((a,b) => a+b, 0));
}
sum([1,2,3], s => console.log(s));
