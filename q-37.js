// Modified make_shirt function with default values
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("your order a ".concat(size, " shirt that says  ").concat(message));
}
make_shirt('large', '"i love TypeScript"');
make_shirt('medium', '"i need a big shirt"');
