function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("You are adult");
        } else {
            reject("You are minor");
        }
    });
}

checkAge(16)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
