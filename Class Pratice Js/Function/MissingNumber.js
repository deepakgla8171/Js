function findMissing(arr, n) {
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}
// Example: findMissing([1,2,4,5], 5) → 3
console.log(findMissing[1,2,3,4,5], 10);