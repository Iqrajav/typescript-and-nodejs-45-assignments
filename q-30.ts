
// Array of usernames
var usernames = ['admin', 'junaid', 'ali', 'ammar', 'najeeb', 'abid'];
// Loop through the array and print greetings
for (var i = 0; i < usernames.length; i++) {
    var username = usernames[i];
    // Check if the username is 'admin' for a special greeting
    if (username.toLowerCase() === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thanks for logging in again!"));
    }
}