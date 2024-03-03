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
//send message
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner!")); });
