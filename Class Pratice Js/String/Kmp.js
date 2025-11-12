function kmpSearch(text, pattern) {
  function buildLPS(pat) {
    const lps = Array(pat.length).fill(0);
    let len = 0, i = 1;
    while (i < pat.length) {
      if (pat[i] === pat[len]) {
        lps[i++] = ++len;
      } else if (len) {
        len = lps[len - 1];
      } else {
        lps[i++] = 0;
      }
    }
    return lps;
  }

  const lps = buildLPS(pattern);
  let i = 0, j = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) { i++; j++; }
    if (j === pattern.length) return i - j;
    else if (i < text.length && text[i] !== pattern[j]) {
      j ? j = lps[j - 1] : i++;
    }
  }
  return -1;
}

console.log(kmpSearch("abxabcabcaby", "abcaby")); 
