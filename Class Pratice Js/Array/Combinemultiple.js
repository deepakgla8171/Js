let a = [1,2];
let b = null;
let c = [3,4];

let combined = (a || []).concat(b || [], c || []);
console.log(combined); 

