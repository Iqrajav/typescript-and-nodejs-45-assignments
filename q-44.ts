function orderSandwich(...items: string[]): void {
    console.log("Sandwich order:");
    for (let i = 0; i < items. length; i++){
        console.log(`-${items[i]}`) 
    }
}
        console.log("enjoy your sandwich iqra javed."); 

// Call the function three times with a different number of arguments
orderSandwich('capsicum', 'Cheese', 'tomato');
orderSandwich('beef', 'chicken');
orderSandwich('garlic chiken', 'mayo sauce');
