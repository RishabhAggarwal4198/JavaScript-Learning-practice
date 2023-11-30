//  Arrays

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);   // 📍 Answer is "1"

const myHeros = ["Superman", "Batman", "Zoro"]
// console.log(myHeros[1]);   // 📍 Answer is "Batman"

const myArr2 = new Array (1, 2, 3, 4) 
// console.log(myArr2[2]);   // 📍 Answer is "3"





// Array Methods 👇 

myArr.push(6);   //  📍 It is for PUSHING the given value into the originla array 
// console.log(myArr); //📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6]"

myArr.push(7); 
// console.log(myArr); // 📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6, 7]"


myArr.pop()     // 📍 for REMOVINg the last value of the originla Array
// console.log(myArr);   // 📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6 ]"


myArr.unshift(9);    // 📍 For ADDING a value on to the 0th position of the Array
// console.log(myArr);    // 📍  Answer is [ 9, 0, 1, 2, 3, 4, 5, 6]


myArr.shift();      // 📍 For  REMOVING a value on to the 0th position of the Array
// console.log(myArr);    // 📍  Answer is [ 0, 1, 2, 3, 4, 5, 6 ]
myArr.shift(); 
// console.log(myArr);    // 📍  Answer is [ 1, 2, 3, 4, 5 ]



// console.log(myArr.includes(9));    // 📍 For knowing whether given value is in the original Array or not ?
// 📍 Answer is "false"


// console.log(myArr.indexOf(4));    // 📍For knowing whether given value of INDEX is in the original Array or not ?
// 📍 Answer is "3"     [it is talking its value from the last "myArr.shift()" operation]
// console.log(myArr.indexOf(9));    // 📍For knowing whether given value of INDEX is in the original Array or not ?
// 📍 Answer is "-1"  i.e. i don't know



const newArr = myArr.join()     // 📍adds all the elements of an array into STRING

// console.log(myArr);     // 📍 Answer is "[ 1, 2, 3, 4, 5, 6 ]"
// console.log(newArr);    //  📍 Answer is "1,2,3,4,5,6" [as it got JOINED & got converted to a STRING]
// console.log(typeof newArr);   // 📍 Answer is "string"








// slice, splice 👇👇 

// console.log("A ", myArr);  // 📍 Answer is "A  [ 1, 2, 3, 4, 5, 6 ]"

const myn1 = myArr. slice(1, 3)  // 📍 returns the value of  the ARRAY of place 1 & 2 [3rd one is not icluded into it]

// console.log(myn1);           // 📍 Answer is "[ 2, 3 ]"
// console.log("B ", myArr);    // 📍 Answer is "B  [ 1, 2, 3, 4, 5, 6 ]"


const myn2 = myArr. splice(1, 3)  // 📍return the value of  the ARRAY of place 1, 2 & 3 [and gonna DELETE that value from the original ARRAY]
// console.log(myn2); // 📍 Answer is  "[ 2, 3, 4 ]"
// console.log("C ", myArr ); //📍 Answer is  "C  [ 1, 5, 6 ]"  📍will DELETE those place values which are asked above in SPLICE





