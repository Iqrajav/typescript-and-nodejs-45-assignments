// Make a list of current users
var current_users = ['admin', 'junaid', 'ali', 'ammar', 'najeeb', 'abid'];
// Make another list of new users
var new_users = ['admin', 'junaid', 'ali', 'mehak', 'sania', 'humaira'];
var _loop_1 = function (newUser) {
    // Check if the new username is already in use (case-insensitive)
    var usernameExists = current_users.some(function (existingUser) { return existingUser.toLowerCase() === newUser.toLowerCase(); });
    // Print a message based on whether the username is available
    if (usernameExists) {
        console.log("Sorry ".concat(newUser, ", that name is already taken."));
    }
    else {
        console.log("yes ".concat(newUser, ", is still in available list."));
    }
};
// Loop through the new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    _loop_1(newUser);
}
