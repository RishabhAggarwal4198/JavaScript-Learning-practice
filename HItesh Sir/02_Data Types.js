"use strict";   // treat all JS code as newer version


console.log("Rishabh");

let name = "Rishabh" // String Data Type

console.log(typeof null);








// Primitive Data Types

//  7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const value = "Hii Everyone";
const socre = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 348242494898598989859895n;  // "BigInt" data type
console.log(typeof bigNumber); // answer is "bigInt"




// Refrence (Non - Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "dogs"]


let myObj = {
    name: "Rishabh",
    age: 22
}


const myFunction = function () {
    console.log("Hello world")
}



let myYoutubename = "aggarwalrishabh4198@gmail.com";

let anothername = myYoutubename
anothername = "Delhi_Cannaught_Place"

console.log(myYoutubename);
console.log(anothername);




let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}



let userTwo = userOne 

userTwo.email = "rishabh@google.com"

console.log(userOne.email);
console.log(userTwo.email);




  
