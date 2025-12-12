function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(60, 20));
