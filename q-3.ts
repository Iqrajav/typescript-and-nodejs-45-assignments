

let personName: string = "Iqra";

//in lowercase

console.log("lowercase:", personName.toLowerCase());

//in uppercase
console.log("uppercase:",personName.toUpperCase());

//titile case
console.log("titlecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()));