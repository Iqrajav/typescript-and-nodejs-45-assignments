// Make a list of current users
let current_users = ['admin', 'junaid', 'ali', 'ammar', 'najeeb', 'abid'];

// Make another list of new users
let new_users = ['admin', 'junaid', 'ali', 'mehak', 'sania', 'humaira'];

// Loop through the new_users list
for (let newUser of new_users) {
    // Check if the new username is already in use (case-insensitive)
    let usernameExists = current_users.some(existingUser => existingUser.toLowerCase() === newUser.toLowerCase());

    // Print a message based on whether the username is available
    if (usernameExists) {
        console.log(`Sorry ${newUser}, that name is already taken.`);
    } else {
        console.log(`yes ${newUser}, is still in available list.`);
    }
}

