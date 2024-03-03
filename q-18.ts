// store the location in a array
let placeToVisit:string[]=["Hongkong","America","Pakistan","Brazil","iran"];

//print array in its original order
console.log(placeToVisit);

//print array in alphabetical order
console.log(placeToVisit.sort());

//show array is still in its original order
console.log(placeToVisit);

//print array in reverse alphabetical order
console.log(placeToVisit.sort().reverse())

//show array is still in its original order
console.log(placeToVisit);

//reverse the order of  list 
console.log(placeToVisit.reverse());

//reverse the order again and print the list to show its back to its original order
console.log(placeToVisit.reverse());

//sort array so its stored in alphabetical order. print the array to show that its order has been changed.
let sortedArray = ["Hongkong","America","Pakistan","Brazil","iran"];
sortedArray.sort();
console.log(sortedArray)

//sort to change array so its stored in reverse alphabetical order. print the array to show that its order has been changed.
sortedArray.reverse();
console.log(sortedArray);