function repeat() {
  console.log("Ping");
  setTimeout(repeat, 1000);
}

repeat();
