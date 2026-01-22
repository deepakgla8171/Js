let time = 10;

const timer = setInterval(() => {
  console.log(time);
  time--;

  if (time < 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 3000);
