function hourglass(n=5){
  for(let i=n;i>=1;i--) console.log(' '.repeat(n-i) + '* '.repeat(i).trim());
  for(let i=2;i<=n;i++) console.log(' '.repeat(n-i) + '* '.repeat(i).trim());
}
hourglass(5);
