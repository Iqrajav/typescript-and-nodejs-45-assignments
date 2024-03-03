// name array
let guestArray :string[]=["iqra","sehrish","nimra"];

//can not make dinner
let canNotAttend :string="sehrish";


//invite new guest
let newGuest :string="humaira";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

console.log("welcome all we found a bigger dinner table");

// new guest add in start
guestArray.unshift("mehwish");

// Add new guest in middle
let middileGuest:string = ("jamila");
let middileindex = guestArray.length/2;
guestArray.splice(middileindex,0,middileGuest);

// Add new guest in the end
guestArray.push("razia");

//send message
guestArray.map((item)=> console.log (`\nDear ${item} you are invited to dinner!`))