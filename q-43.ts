// Define the make_great function
function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}

// Define the show_magicians function
function show_magicians(label: string, magicians: string[]): void {
    console.log(`${label}:`);
    console.log(magicians);
}

// Array of magician's names
const originalMagicians: string[] = ['Ali', 'Arshad', 'Zeeshan', 'Haris'];

// Create a copy of the original array
const copiedMagicians = [...originalMagicians];

// Call the function to make the magicians great and get a new array
const greatMagicians = make_great(copiedMagicians);

// Call the function to show the original magicians
show_magicians("Unchanged Magicians", originalMagicians);

// Call the function to show the great magicians
show_magicians("Great Magicians", greatMagicians);

