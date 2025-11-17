let n=5,str="";
for(let i=1;i<=n;i++){
  for(let j=1;j<=i;j++){
    str+=((i+j)%2)+" ";
  }
  str+="\n";
}
console.log(str);
