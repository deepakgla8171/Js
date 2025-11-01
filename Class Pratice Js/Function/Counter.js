function counter(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}
const c = counter();
console.log(c()); 
console.log(c()); 
