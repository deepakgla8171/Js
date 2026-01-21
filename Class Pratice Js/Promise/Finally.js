let p = new Promise((resolve, reject) => {
    reject("Error");
});

p.then(res => console.log(res))
 .catch(err => console.log(err))
 .finally(() => console.log("Done running promise"));
