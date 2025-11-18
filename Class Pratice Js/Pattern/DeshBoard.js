let n=8,str="";
for(let i=0;i<n;i++){
  for(let j=0;j<n;j++){
    str+=(i+j)%2==0 ? "*" : " ";
  }
  str+="\n";
}
console.log(str);
