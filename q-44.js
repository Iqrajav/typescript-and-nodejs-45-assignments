function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
}
console.log("enjoy your sandwich iqra javed.");
// Call the function three times with a different number of arguments
orderSandwich('capsicum', 'Cheese', 'tomato');
orderSandwich('beef', 'chicken');
orderSandwich('garlic chiken', 'mayo sauce');
