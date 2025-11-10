for (let n = 1; n <= 10; n++) {
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  let sum = 0;
  for (let temp = fact; temp > 0; temp = Math.floor(temp / 10)) {
    sum += temp % 10;
  }
  console.log(`n=${n}, factorial=${fact}, sum=${sum}`);
}
