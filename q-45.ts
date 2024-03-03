function createCar(manufacturer, modelName, ...additionalInfo) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Process additional key-value pairs
    for (let i = 0; i < additionalInfo.length; i += 2) {
        const key = additionalInfo[i];
        const value = additionalInfo[i + 1];

        // Check if both key and value are provided
        if (key && value) {
            car[key] = value;
        }
    }

    return car;
}

// Call the function with required information and additional key-value pairs
const myCar = createCar('Toyota', 'Camry', 'color', 'Blue', 'year', 2024);

// Print the object to ensure all information was stored correctly
console.log(myCar);
