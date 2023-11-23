"use strict";   // treat all JS code as newer version


// alert(3 + 3) // It Won't work here bcoz we are not using Node.js


// 📍📍Code readibilty is the priority in any language 📍📍

// Range of "number" data type is somewhere upto      2 to the power 53

//  "BigInt" for  string big numbers.  btw it's very rare to use "BigInt" 

//  String = "xyz" or = 'xyz'  (we could use any of the quotes)

//  boolean = true / false

// null  ➤ it's an STAND-ALONE value, it means the "empty value" (not ZERO just simply "nothing")

// undefined  ➤ it means the value is not defined yet

// symbol ➤ used for defining UNIQUE COMPONENTS



console.log("Rishabh");

let name = "Rishabh"   // String Data Type

console.log(typeof null);    // 📍 Answer is "object"





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




  
