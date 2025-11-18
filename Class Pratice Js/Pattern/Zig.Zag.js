let n=10,str="";
for (let i=1;i<=3;i++){
  for (let j=1;j<=n;j++){
    if((i+j)%4==0 || (i==2 && j%4==0)) str+="*";
    else str+=" ";
  }
  str+="\n";
}
console.log(str);
