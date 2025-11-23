function myMap(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

let out = myMap([1, 2, 3], (x) => x * 2);
console.log(out); // [2, 4, 6]
