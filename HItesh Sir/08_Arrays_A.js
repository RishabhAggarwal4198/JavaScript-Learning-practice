
//💎✅💎 Arrays   👇👇

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);   // 📍 Answer is "1"

const ally = ["A", "B", "C", "D", "E", "F"]
// console.log(ally[2]);      // 📍 Answer is "C"

const myHeros = ["Superman", "Batman", "Zoro"]
// console.log(myHeros[1]);   // 📍 Answer is "Batman"

const myArr2 = new Array (1, 2, 3, 4) 
// console.log(myArr2[2]);   // 📍 Answer is "3"

const myArr3 = [`A`, 3, "Raman", true, 40.5764, null]
// console.log(myArr3[2]);   // 📍 Answer is "Raman"
// console.log(myArr3[4]);   // 📍 Answer is "40.5764"
// console.log(parseInt(myArr3[4]));   // 📍 Answer is "40"

// ✅✅✅✅ Now go to BROWSER >> console >> declare an ARRAY to see How many types of PROTOTYPE properties an ARRAY have






// 💎✅💎 ARRAY-METHODS 👇👇

myArr.push(6);   //  ✅ It is for PUSHING the given value into the originla array 
// console.log(myArr);  //📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6]"
                              // 🔽🔽
myArr.push(7); 
// console.log(myArr); // 📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6, 7]"







myArr.pop()     // ✅ for REMOVING the last value of the original Array
// console.log(myArr);   // 📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6 ]"
myArr.pop()
// console.log(myArr);   // 📍 Answer will be "[ 0, 1, 2, 3, 4, 5 ]"




myArr.unshift(9);    // ✅ For ADDING a value from the 0th position of the Array
// console.log(myArr);    // 📍  Answer is [ 9, 0, 1, 2, 3, 4, 5, 6]




myArr.shift();      // ✅ For  REMOVING a value from the  0th position of the Array
// console.log(myArr);    // 📍  Answer is [ 0, 1, 2, 3, 4, 5, 6 ]
myArr.shift(); 
// console.log(myArr);    // 📍  Answer is [ 1, 2, 3, 4, 5 ]


let val = myArr.includes(9);       // ✅ For knowing whether given value is in the original Array or not ?
// console.log(val);                 // 📍 Answer is "false"





let val1 = myArr.indexOf(4);      // ✅For knowing whether given value of INDEX is in the original Array or not ?
// console.log(val1);             // 📍 Answer is "3"     [✅it is talking its value from the last "myArr.shift()" operation]

                                // 🔽🔽

let val2 = myArr.indexOf(9);     // ✅For knowing whether given value of INDEX is in the original Array or not ?
// console.log(val2);            // 📍 Answer is "-1"  [i.e. false OR i don't know]







const newArr = myArr.join()     // [@3:25:00] 📍converts all the elements of an array into STRING

// console.log(myArr);     // 📍 Answer is "[ 1, 2, 3, 4, 5, 6 ]"
// console.log(newArr);    //  📍 Answer is "1,2,3,4,5,6" (as it got JOINED & got converted to a STRING])
// console.log(typeof newArr);   // 📍 Answer is "string"

const myArr4 = [`A`, 3, "Raman", true, 40.5764, null, 'B', 5]
let val4 = myArr4.join()
console.log(val4);                // 📍 Answer is "A,3,Raman,true,40.5764,,B,5"









// 💎✅💎 SLICE 👇👇  [returns the value of  the ARRAY of place 1 & 2 [3rd one is not icluded into it]]

console.log("A ", myArr);  // 📍 Answer is "A  [ 1, 2, 3, 4, 5, 6 ]"
const myn1 = myArr.slice(1, 3)   
console.log(myn1);           // 📍 Answer is "[ 2, 3 ]"
console.log("B ", myArr);    // 📍 Answer is "B  [ 1, 2, 3, 4, 5, 6 ]"






// 💎✅💎 SPLICE 👇👇  [return the value of  the ARRAY of place 1, 2 & 3 [and gonna DELETE that value from the original ARRAY]]
const myn2 = myArr. splice(1, 3) 
// console.log(myn2); // 📍 Answer is  "[ 2, 3, 4 ]"
// console.log("C ", myArr ); //📍 Answer is  "C  [ 1, 5, 6 ]"  📍will DELETE those place values which are asked above in SPLICE





