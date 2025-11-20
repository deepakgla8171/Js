function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  
  return copy;
}

const original = { a: 10, b: { c: 20 } };
const clone = deepClone(original);

console.log(clone);
