let a = 12, b = 18, gcd = 1;
for (let i = 1; i <= Math.min(a, b); i++) {
  if (a % i === 0 && b % i === 0) gcd = i;
}
let lcm = (a * b) / gcd;
console.log("LCM:", lcm); 
