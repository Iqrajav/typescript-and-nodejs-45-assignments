var name_1 = "iqra";
var name_2 = "iqra javed";
var name_3 = "iqra muhammad javed";
// for  inequality
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("name are not equal");
}
// for equality
if (name_1 != name_2) {
    console.log("names are equal");
}
else {
    console.log("name are not equal");
}
// for equality
if (name_1 != name_3) {
    console.log("names are equal");
}
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 22) {
    console.log("eligible for vote in older category");
}
//less
if (age_1 <= age_2) {
    console.log("younger");
}
//greater
if (age_1 <= age_1) {
    console.log("older");
}
// using "and" operator
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
// using "or" operator
if (age_1 == 18 || age_2 != 22) {
    console.log("person is noteligible for vote");
}
var country = ["pakistan", "india", "iraq", "china"];
if (country.indexOf("pakistan")) {
    console.log("pakistan is in country list");
}
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
var fruitToCheck = 'banana';
console.log(fruits.indexOf(fruitToCheck)
    ? "".concat(fruitToCheck, " is in the array.")
    : "".concat(fruitToCheck, " is in the array."));
// Test whether an item is not in an array
var fruitToCheckNotInArray = 'grape';
console.log(!fruits.indexOf(fruitToCheckNotInArray)
    ? "".concat(fruitToCheckNotInArray, " is not in the array.")
    : "".concat(fruitToCheckNotInArray, " is not in the array."));
