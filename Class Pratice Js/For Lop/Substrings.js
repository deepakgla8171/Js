function allSubstrings(str) {
  let subs = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subs.push(str.slice(i, j));
    }
  }
  return subs;
}

console.log(allSubstrings("pbc"));
