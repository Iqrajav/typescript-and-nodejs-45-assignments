var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the make_great function
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
// Define the show_magicians function
function show_magicians(label, magicians) {
    console.log("".concat(label, ":"));
    console.log(magicians);
}
// Array of magician's names
var originalMagicians = ['Ali', 'Arshad', 'Zeeshan', 'Haris'];
// Create a copy of the original array
var copiedMagicians = __spreadArray([], originalMagicians, true);
// Call the function to make the magicians great and get a new array
var greatMagicians = make_great(copiedMagicians);
// Call the function to show the original magicians
show_magicians("Unchanged Magicians", originalMagicians);
// Call the function to show the great magicians
show_magicians("Great Magicians", greatMagicians);
