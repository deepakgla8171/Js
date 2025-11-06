function secondLargest(arr) {
  const unique = [...new Set(arr)]; // remove duplicates
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([10, 40, 30, 20, 40])); // 30

