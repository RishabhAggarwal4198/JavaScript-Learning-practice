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
// console.log(otherNumber4.toPrecision(4));    // 📍 Answer is "1124"  [3 precise values]


const hundreds = 100000000000
// console.log(hundreds.toLocaleString('en-IN'));   // 📍 Answer is "1,00,00,00,00,000"  [commas as per INDIAN numeric system]
// console.log(hundreds.toLocaleString('en-US'));   // 📍 Answer is "100,000,000,000"    [commas as per US numeric system]



// +++++++++++++++++++ Maths +++++++++++++++++++



// console.log(Math);

// console.log(Math.abs(-4));    // 📍Turns negative value into positive 

// console.log(Math.round(4.4));  // 📍answer will be 4  [rounds off the value]

// console.log(Math.ceil(4.2));   // 📍 Answer is "5"     [chooses the HIGHEST value]
// console.log(Math.floor(4.9));  // 📍 Answer is "4"   [chooses the LOWEST value]





// For getting the MINIMUM & MAXIMUM value (out of te given value) 👇

console.log(Math.min(4, 3, 6, 8));   // 📍 Answer is "3"  
console.log(Math.max(4, 3, 6, 8));   // 📍 Answer is "8"  





// MATH - RANDOM 👇 [Values will always come b/w  0 - 1 (mostly in decimals)]

// console.log(Math.random());  
// So we do the following thing to it

// console.log((Math.random()*10) + 1);   // 📍 [ We mutliplied "10" to avoid decimal value & as value could also come zero so to avoid that we added "1" to it ]

// console.log(Math.floor(Math.random()*10) + 1);  // 📍 to round off the CURRENT value we could add "Math.floor"




// When u want values between two NUMBERS only 👇 

const  minValue = 10;
const maxValue = 20;

// console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);    // 📍 Run it to know how it works  [watch @2:52:05 ]


const  minValue0 = 10;
const maxValue0 = 20;

console.log(Math.floor(Math.random() * (maxValue0 - minValue0 + 1)) + minValue0);    // 📍 Run it to know how it works  [watch @2:52:05 ]


 

