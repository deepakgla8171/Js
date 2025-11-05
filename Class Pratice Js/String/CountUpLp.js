let text = "HelloWorldJS";
let upper = 0, lower = 0;

for (let ch of text) {
  if (ch >= "A" && ch <= "Z") upper++;
  else if (ch >= "a" && ch <= "z") lower++;
}

console.log(`Uppercase: ${upper}, Lowercase: ${lower}`);
