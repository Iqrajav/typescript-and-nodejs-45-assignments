var users = ['admin', 'junaid', 'ali', 'ammar', 'najeeb', 'abid'];
if (users.length === 0) {
    // If the list is empty, print the message
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
