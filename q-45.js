function createCar(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Process additional key-value pairs
    for (var i = 0; i < additionalInfo.length; i += 2) {
        var key = additionalInfo[i];
        var value = additionalInfo[i + 1];
        // Check if both key and value are provided
        if (key && value) {
            car[key] = value;
        }
    }
    return car;
}
// Call the function with required information and additional key-value pairs
var myCar = createCar('Toyota', 'Camry', 'color', 'Blue', 'year', 2024);
// Print the object to ensure all information was stored correctly
console.log(myCar);
