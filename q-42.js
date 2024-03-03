// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
var magicians = ['Ali', 'Arshad', 'Zeeshan', 'Haris'];
// Call the function to make the magicians great
make_great(magicians);
// Call the function to show the magicians
show_magicians(magicians);
