function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), ms);
  });
}

delay(1500).then(console.log);
