function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function isStrong(n) {
  let temp = n, sum = 0;
  while (temp > 0) {
    sum += factorial(temp % 10);
    temp = Math.floor(temp / 10);
  }
  return sum === n;
}

console.log(isStrong(145));
