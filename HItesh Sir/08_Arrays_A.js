
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



//🍀🍀🍀🍀

let myArrz = [`Ramesh`, `Suresh`, `Prathmesh`, `Yogesh`] 

// console.log(myArrz[2]);           	 //[📍📍 Answer is :- "Prathmesh" ] 
// console.log(myArrz[2][z]);        	 //[📍📍 Answer is :- "t" ]   //🍁 zrd digit of "Prathmesh"
// console.log(myArrz[2].length);        //[📍📍 Answer is :- "9" ]  


//EMPTY ARRAY
let newArrey = []
// console.log(newArrey.length);           //[📍📍 Answer is :-  "0"  ] 
// console.log([1, 2, 3, 4, 5].length);    //[📍📍 Answer is :-  "5"  ] 




let fruits = ['Banana', 'Grapes', 'PineApple', 'Orange']
fruits[1] = 'Pear'
console.log(fruits);                      //[📍📍 Answer is :-  "[ 'Banana', 'Pear', 'PineApple', 'Orange' ]"  ] 

//🍀🍀🍀🍀





// 💎✅💎 ARRAY-METHODS 👇👇

myArr.push(6);   //  ✅ It is for PUSHING the given value into the originla array 
// console.log(myArr);  //📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6]"
                              // 🔽🔽
myArr.push(7); 
// console.log(myArr); // 📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6, 7]"







myArr.pop()     // ✅ for REMOVING the last value of the original Array
// console.log(myArr);   // 📍 Answer will be "[ 0, 1, 2, 3, 4, 5, 6 ]"

                                // 🔽🔽
myArr.pop()
// console.log(myArr);   // 📍 Answer will be "[ 0, 1, 2, 3, 4, 5 ]"




myArr.unshift(9);    // ✅ For ADDING a value from the 0th position of the Array
// console.log(myArr);    // 📍  Answer is [ 9, 0, 1, 2, 3, 4, 5, 6]









myArr.shift();      // ✅ For  REMOVING a value from the  0th position of the Array
// console.log(myArr);    // 📍  Answer is [ 0, 1, 2, 3, 4, 5, 6 ]

                                // 🔽🔽
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
                        // 🔽🔽
const myArr4 = [`A`, 3, "Raman", true, 40.5764, null, 'B', 5]
let val4 = myArr4.join()
// console.log(val4);                // 📍 Answer is "A,3,Raman,true,40.5764,,B,5"








// 💎✅💎 SLICE 👇👇 [ myArr.slice(a,d)] [🍁returns the value of  the ARRAY of place a,b, c [ "d"th one is not included into it]]

const myArr5 = [0, 0.5, 1, 2, 3, 4, 5]
// console.log("A ", myArr5);  // 📍 Answer is "A  [0, 0.5, 1, 2, 3, 4, 5]"
const myn1 = myArr5.slice(1, 4) 
// console.log(myn1);           // 📍 Answer is "[ 0.5, 1, 2 ]"
// console.log("B ", myArr5);    // 📍 Answer is "B  [0, 0.5, 1, 2, 3, 4, 5]"







// 💎✅💎 SPLICE 👇👇  [ myArr.slice(a,d)] [🍁returns the value of  the ARRAY of place a,b,c & d [ every array value is included into it]]
const myArr6 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
const myn2 = myArr6. splice(1, 4) 
console.log(myn2); // 📍 Answer is  "[ 8, 7, 6, 5 ]"
console.log("C ", myArr6 ); //📍 Answer is  "C  [ 9, 4, 3, 2, 1 ]"  ✅✅✅ will DELETE all those place values from the above ARRAY which are asked above in SPLICE & prints all left over values





