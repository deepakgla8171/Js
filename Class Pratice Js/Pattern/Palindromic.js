function palindromic(n=5){
  for(let i=1;i<=n;i++){
    let left=''; for(let j=i;j>=1;j--) left += j;
    let right=''; for(let j=2;j<=i;j++) right += j;
    console.log(' '.repeat(n-i) + left + right);
  }
}
palindromic(5);
