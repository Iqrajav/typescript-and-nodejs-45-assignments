// name array
let guestArray :string[]=["iqra","sehrish","nimra"];

//can not make dinner
let canNotAttend :string="sehrish";
console.log(`${canNotAttend} can not make it, for dinner` );

//invite new guest
let newGuest :string="humaira";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;
console.log(guestArray);

//send message
guestArray.map((items)=>console.log(`Hello, ${items} you are invited to dinner`));


