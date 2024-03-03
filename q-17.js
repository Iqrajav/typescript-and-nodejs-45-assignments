// name array
var guestArray = ["iqra", "sehrish", "nimra"];
//can not make dinner
var canNotAttend = "sehrish";
//invite new guest
var newGuest = "humaira";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log("welcome all we found a bigger dinner table");
// new guest add in start
guestArray.unshift("mehwish");
// Add new guest in middle
var middileGuest = ("jamila");
var middileindex = guestArray.length / 2;
guestArray.splice(middileindex, 0, middileGuest);
// Add new guest in the end
guestArray.push("razia");
console.log(guestArray);
//send message
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner!")); });
//invite only two guest
console.log("we can invite only two people for dinner");
//remove guest
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nsorry ".concat(removeguest, " we can't invite you to dinner"));
}
//message to each guest still invited
guestArray.map(function (item) { return console.log("\n".concat(item, " you are still invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
