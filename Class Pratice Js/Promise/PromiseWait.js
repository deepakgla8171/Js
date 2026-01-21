function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User Loaded"), 2000);
    });
}

async function showUser() {
    let data = await fetchUser();
    console.log(data);
}

showUser();
