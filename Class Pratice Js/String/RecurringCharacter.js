function firstRecurring(str) {
  const set = new Set();
  for (let ch of str) {
    if (set.has(ch)) return ch;
    set.add(ch);
  }
  return null;
}

console.log(firstRecurring("ABCA")); 
