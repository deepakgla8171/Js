const timer = setTimeout(() => {
  console.log("You will not see this");
}, 3000);

clearTimeout(timer);
