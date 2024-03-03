var personName = "Iqra";
//in lowercase
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//titile case
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
