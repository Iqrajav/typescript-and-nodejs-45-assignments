let name_1:string = "iqra"
let name_2:string = "iqra javed"
let name_3:string = "iqra muhammad javed"

// for  inequality
if (name_1 == name_3){
    console.log("names are equal")
}else{
   console.log("name are not equal")
}

// for equality
if (name_1 != name_2){
    console.log("names are equal")
}else{
    console.log("name are not equal")
}

// for equality
if (name_1 != name_3){
    console.log("names are equal")
}

let age_1:number = 18
let age_2:number = 22
if (age_1 == 18){
    console.log("eligible for vote")
}


if (age_1 != 22){
    console.log("eligible for vote in older category")
}

//less
if (age_1<= age_2){
    console.log("younger")
}

//greater
if (age_1<= age_1){
    console.log("older")
}

// using "and" operator
if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote")
}


// using "or" operator
if (age_1 == 18 ||age_2 != 22){
    console.log("person is noteligible for vote")
}

let country: string [] = ["pakistan", "india", "iraq", "china"]
if (country.indexOf("pakistan")){
    console.log("pakistan is in country list")
}
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
let fruitToCheck = 'banana';

console.log(fruits.indexOf(fruitToCheck)
    ? `${fruitToCheck} is in the array.`
    : `${fruitToCheck} is in the array.`);

// Test whether an item is not in an array
let fruitToCheckNotInArray = 'grape';

console.log(!fruits.indexOf(fruitToCheckNotInArray)
    ? `${fruitToCheckNotInArray} is not in the array.`
    : `${fruitToCheckNotInArray} is not in the array.`);

