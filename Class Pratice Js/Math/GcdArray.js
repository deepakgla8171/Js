function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function gcdArray(arr) {
  return arr.reduce((a, b) => gcd(a, b));
}

console.log(gcdArray([24, 60, 36]));
