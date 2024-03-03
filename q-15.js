// name array
var guestArray = ["iqra", "sehrish", "nimra"];
//can not make dinner
var canNotAttend = "sehrish";
console.log("".concat(canNotAttend, " can not make it, for dinner"));
//invite new guest
var newGuest = "humaira";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
//send message
guestArray.map(function (items) { return console.log("Hello, ".concat(items, " you are invited to dinner")); });
