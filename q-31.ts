let users = ['admin', 'junaid', 'ali', 'ammar', 'najeeb', 'abid'];

if (users.length === 0) {
    // If the list is empty, print the message
    console.log("We need to find some users!");
} else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report");
        } else {
            console.log(`Hello ${user}, thank you for logging in again`);
        }
    }
}

users = []
if (users.length === 0) {
    console.log("We need to find some users!")
}