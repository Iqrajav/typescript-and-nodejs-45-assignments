// Define the show_magicians function
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Array of magician's names
let magicians = ['Ali', 'Arshad', 'Zeeshan', 'Haris'];

// Call the function to make the magicians great
make_great(magicians);

// Call the function to show the magicians
show_magicians(magicians);
