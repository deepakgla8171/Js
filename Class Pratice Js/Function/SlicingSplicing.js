const arr = [1,2,3,4,5];

console.log(arr.slice(1,4)); // [2,3,4] (non-destructive)
arr.splice(2, 1, 99); // remove 1 element at index 2, insert 99
console.log(arr); // [1,2,99,4,5]

