const score = 400;
// console.log(score);          // 📍 Answer is "400"

const balance = new Number (100)
// console.log(balance);       // 📍 Answer is "[Number: 100]"

// Converting it to STRING

// console.log(balance.toString());  // Got converted to a STRING

// console.log(balance.toString().length);
// console.log(balance.toFixed(4));       // 📍 Answer is "100.0000" [it gonna give us value upto 4 digits]





// Precision value

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));     // 📍 Answer is "23.9"  [3 precise values]


const otherNumber2 = 123.2966
// console.log(otherNumber2.toPrecision(3));    // 📍 Answer is "123"  [3 precise values]


const otherNumber3 = 1123.8966 
// console.log(otherNumber3.toPrecision(3));    // 📍 Answer is "1.12e+3"  [3 precise values]


const otherNumber4 = 1123.8966 
// console.log(otherNumber4.toPrecision(3));    // 📍 Answer is "1124"  [3 precise values]



const hundreds = 100000000000
// console.log(hundreds.toLocaleString('en-IN'));






// +++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));   // Turns negative value into positive 

// console.log(Math.round(4.4)); // answer will be 4

// console.log(Math.ceil(4.2));  // chooses the HIGHEST value
// console.log(Math.floor(4.9)); // chooses the LOWEST value




// For choosing the MINIMUM & MAXIMUM value

// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));







// MATH - RANDOM

// console.log(Math.random());  // Values will alwyas come b/w  0 - 1 (mostly in decimals)
// So we do the following thing to it

// console.log((Math.random()*10) + 1);

// console.log(Math.floor(Math.random()*10) + 1);  // to round off the CURRENT value we could add "Math.floor"







const  minValue = 10;
const maxValue = 20;

console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);



