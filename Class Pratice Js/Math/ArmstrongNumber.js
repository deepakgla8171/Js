function isArmstrong(n) {
  let sum = 0;
  let digits = n.toString().length;
  let temp = n;

  while (temp > 0) {
    sum += Math.pow(temp % 10, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === n;
}
console.log(isArmstrong(153));
console.log(isArmstrong(123));
