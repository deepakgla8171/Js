function isValid(s) {
    let stack = [];
    let map = { ')':'(', ']':'[', '}':'{' };

    for (let ch of s) {
        if (map[ch]) {
            if (stack.pop() !== map[ch]) return false;
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
}

console.log(isValid("({[]})")); // true
