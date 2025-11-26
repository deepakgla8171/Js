function repeat(msg, times, cb) {
    let out = "";
    for (let i = 0; i < times; i++) out += msg + " ";
    cb(out);
}
repeat("Hi", 3, res => console.log(res));
