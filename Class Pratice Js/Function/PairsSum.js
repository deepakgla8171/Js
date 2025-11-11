function findPairs(arr, target) {
  const seen = new Set();
  const pairs = [];

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) pairs.push([complement, num]);
    seen.add(num);
  }

  return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5, 6], 7));
