// Store the names of animals with a common characteristic in an array
let animals = ['Dog', 'Cat', 'Rabbit'];

// Use a for loop to print the name of each animal
for (let animal of animals) {
    console.log(animal);
}

// Modify the for loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Add a line at the end to state the common characteristic
console.log("Any of these animals would make a great pet")
