function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User Loaded"), 1000);
    });
}

async function showUser() {
    let data = await fetchUser();
    console.log(data);
}

showUser();
