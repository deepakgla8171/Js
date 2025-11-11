function primesUpTo(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) if (isPrime(i)) primes.push(i);
  return primes;
}
console.log(primesUpTo(20));
