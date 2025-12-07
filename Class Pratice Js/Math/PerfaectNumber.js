function isPerfect(n) {
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (n / i !== i) sum += n / i;
    }
  }
  return sum === n && n !== 1;
}
console.log(isPerfect(28));
