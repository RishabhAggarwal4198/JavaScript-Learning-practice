// const userEmail = []

// if (userEmail) {
//     console.log("Gpt user email");
// } else {
//     console.log("Don't have user email");
// }





// FALSY - VALUES 👇👇

// false, 0, -0, BigInt 0n, "", null, undefined, NaN




// TRUTHY - VALUES 👇👇

// "0", "False", " ", [], {}, function(){}







// EXAMPLE - 1 👇👇

const userEmail2 = []

// if (userEmail2.length === 0) {
//     console.log("Array is Empty");
// }   

//  📍 And since value of "userEmail2.length = 0", condition is TRUE,  Answer is  "Array is Empty"







// EXAMPLE - 2 👇👇

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
// }                   //  📍 Answer is  "Object is Empty"






// INTERVIEW - QUESTIONS 👇👇

// console.log(false == 0);    //  📍 Answer is  "true"

// console.log(false == '');    //  📍 Answer is  "true"

// console.log(0 == '');       //  📍 Answer is  "true"











// NULLISH COALESCING OPERATOR (??) : null defined 👇👇

let val1 =  5 ?? 10
// console.log(val1);     //  📍 Answer is  "5"

let val2 =  null ?? 10
// console.log(val2);     //  📍 Answer is  "10"

let val3 = undefined ?? 15 
// console.log(val3);     //  📍 Answer is  "15"

let val4 = null ?? 10 ?? 20
// console.log(val4);     //  📍 Answer is  "10"  [the first numerical value from left got assigned]






// TERNIARY OPERATORS 👇👇

// condition ? true : false

// Example 👇
const iceTeaPrice = 100 
iceTeaPrice <= 80 ?  console.log("Price is less than 80 "): console.log("Price is more than 80");
// 📍 Answer is  "Price is more than 80"






