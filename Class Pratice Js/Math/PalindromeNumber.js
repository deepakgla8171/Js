function isPalindrome(n) {
  let original = n;
  let rev = 0;

  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return original === rev;
}
console.log(isPalindrome(1221));
