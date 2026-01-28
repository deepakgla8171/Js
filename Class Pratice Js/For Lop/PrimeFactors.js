let num = 3;
for (let i = 2; i <= num; i++) {
  while (num % i === 0) {
    console.log(i);
    num /= i;
  }
}
