function delay(callback) {
    setTimeout(callback, 3000);
}

delay(() => {
    console.log("Executed after 3 seconds");
});
