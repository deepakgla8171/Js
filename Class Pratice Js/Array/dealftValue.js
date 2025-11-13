let arr = [0, null, undefined, 5, '', 10];
let newArr = arr.map(x => x || 100); 
console.log(newArr); 

