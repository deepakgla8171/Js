function mySetTimeout(callback, delay) {
  const start = Date.now();

  function loop() {
    if (Date.now() - start >= delay) {
      callback();
    } else {
      requestAnimationFrame(loop);
    }
  }

  loop();
}

mySetTimeout(() => console.log("Executed!"), 2000);

