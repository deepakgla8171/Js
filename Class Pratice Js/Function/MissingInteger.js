function firstMissingPositive(nums) {
    let s = new Set(nums);
    let i = 1;
    while (true) {
        if (!s.has(i)) return i;
        i++;
    }
}

console.log(firstMissingPositive([3,4,-1,1])); // 2
