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
console.log(guestArray);

//send message
guestArray.map((item)=> console.log (`\nDear ${item} you are invited to dinner!`))

//invite only two guest
console.log("we can invite only two people for dinner");

//remove guest
while(guestArray.length>2){let removeguest= guestArray.pop();console.log(`\nsorry ${removeguest} we can't invite you to dinner`)}

//message to each guest still invited
guestArray.map((item)=> console.log (`\n${item} you are still invited to dinner!`))

//empty list
guestArray.pop();
guestArray.pop();
console.log(guestArray);
