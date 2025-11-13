function zeroSumSubarrays(arr) {
  const map = new Map();
  const result = [];
  let sum = 0;
  map.set(0, [-1]);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (map.has(sum)) {
      for (let index of map.get(sum)) {
        result.push(arr.slice(index + 1, i + 1));
      }
    }
    if (!map.has(sum)) map.set(sum, []);
    map.get(sum).push(i);
  }

  return result;
}

console.log(zeroSumSubarrays([3, 4, -7, 1, 2, -6, 3, 1]));

