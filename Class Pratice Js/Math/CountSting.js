function countDigits(n) {
  let c = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    c++;
  }
  return c;
}
console.log(countDigits(987654));
