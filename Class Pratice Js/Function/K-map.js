function subarraySum(nums, k) {
    let map = new Map();
    map.set(0, 1);
    let sum = 0, count = 0;

    for (let x of nums) {
        sum += x;
        if (map.has(sum - k)) count += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

console.log(subarraySum([1,1,1], 2)); // 2
