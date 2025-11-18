let n=5,str="";
for(let i=n;i>=1;i--)
  str+=" ".repeat(n-i)+"*".repeat(2*i-1)+"\n";
for(let i=2;i<=n;i++)
  str+=" ".repeat(n-i)+"*".repeat(2*i-1)+"\n";
console.log(str);
