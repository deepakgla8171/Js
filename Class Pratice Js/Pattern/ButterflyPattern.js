let n=5,str="";
for(let i=1;i<=n;i++){
  str+="*".repeat(i)+" ".repeat(2*(n-i))+"*".repeat(i)+"\n";
}
for(let i=n;i>=1;i--){
  str+="*".repeat(i)+" ".repeat(2*(n-i))+"*".repeat(i)+"\n";
}
console.log(str);
