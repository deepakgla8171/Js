function powerSet(arr) {
  const result = [[]];
  for (let item of arr) {
    const newSubsets = result.map(sub => [...sub, item]);
    result.push(...newSubsets);
  }
  return result;
}
console.log(powerSet([1,2]));