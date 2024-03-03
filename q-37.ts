// Modified make_shirt function with default values
function make_shirt(size = 'large', message = "I love TypeScript") {
    console.log(`your order a ${size} shirt that says  ${message}`);
}

make_shirt('large','"i love TypeScript"')
make_shirt('medium','"i need a big shirt"')

