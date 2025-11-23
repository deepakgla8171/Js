let count = 0;

function run() {
    count++;
    console.log("Count:", count);

    if (count < 5) {
        setTimeout(run, 1000);
    }
}

run();
