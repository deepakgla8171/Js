function countWords(text, cb) {
    cb(text.split(" ").length);
}
countWords("I love JavaScript", c => console.log(c));
