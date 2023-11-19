//  Arrays

const myArr = [1, 2, 3, 4, 5]

const myHeros = ["Superman", "Batman", "Zoro"]
// console.log(myHeros[1]);

const myArr2 = new Array (1, 2, 3, 4)
// console.log(myArr[1]);




// Array Methods

myArr.push(6); // It is for PUSHING the given value into the originla array 
// console.log(myArr); // Answer will be "[ 0, 1, 2, 3, 4, 5, 6]"

myArr.pop()// for REMOVINg the last value of the originla Array
// console.log(myArr);   // Answer will be "[ 0, 1, 2, 3, 4, 5 ]"


myArr.unshift(9); // For ADDING a value on to the 0th position of the Array
// console.log(myArr); //  Answer is [ 9, 0, 1, 2, 3, 4, 5]


myArr.shift(); // For  REMOVING a value on to the 0th position of the Array
// console.log(myArr); //  Answer is [ 0, 1, 2, 3, 4, 5 ]


console.log(myArr.includes(9)); // For knowing wether given value is in the original Array or not ?
//  Answer is "false"

console.log(myArr.indexOf(4)); // For knowing wether given value of INDEX is in the original Array or not ?
//  Answer is "-1"  i.e. i don't know


const newArr = myArr.join()  // converts all the values of an array into STRING

// console.log(myArr);  //  Answer is "[ 1, 2, 3, 4, 5 ]"
// console.log(newArr); //  Answer is "1,2,3,4,5" [as it got JOINED]





// slice, splice

console.log("A ", myArr);

const myn1 = myArr. slice(1, 3)  // return the value of  the ARRAY oo place 1 & 2 [3rd one is not icluded into it]

console.log(myn1);
console.log("B ", myArr);

