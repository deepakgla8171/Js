function clamp(num, min, max){
  return Math.min(Math.max(num, min), max);
}

console.log(clamp(120, 0, 100)); // 100
console.log(clamp(-5, 0, 100));  // 0
