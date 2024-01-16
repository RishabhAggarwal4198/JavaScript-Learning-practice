const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    // [watch @8:42:00]




//📍✅📍CONDITION:- We want to add '10' to each of the values in the ARRAY above 👇

const newNums = myNumers.map( (num) => {return num + 10})
// console.log(newNums);                   //📍 Answer is "[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"





// 💎✅💎 CHAINING 👇👇 (applying MAP more than once & then applying FILTER on it)

const myNumers0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums0 = myNumers0
                        .map((num) => num*10)       //✅  at this stage values will be [10, 20, 30, 40, .......] [@8:48:32 ]
                        .map((num) => num + 1 )     //✅  at this stage values will be [11, 21, 31, 41, .......]
                        .filter ( (num) => num >= 40) 

// console.log(newNums0);                           //📍   Answer is "[ 41, 51,  61, 71, 81, 91, 101]"










//💎✅💎 REDUCE- METHOD👇👇   [watch @8:49:39] [also read on MDN website]


const myNums1 = [1,2,3]

const myTotal = myNums1. reduce (function (acc, currntVal){
    console.log(`acc: ${acc} and currntVal: ${currntVal}`);     // 📍 [Run the code to know the Output or watch @8:55:37 ]  This "console.log" is done to know that what's actually entering inside "acc"  &  "currentVal"
    return acc + currntVal
},0)                                 // 📍"0" here means you have to start from 0

// console.log(myTotal);             // 📍Answer is "6"


                        // 🔽🔽


// 📍💎📍writing above function in  ARROW-FUNCTION 👇 (short-code)

const myTotal_1 = myNums1.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal_1);           //📍Answer is "6"   [watch @8:55:37 to know how it worked]






//💎💎 example 👇

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: " data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce ((acc, item) => acc + item.price, 0);

// console.log(priceToPay);              //📍Answer is "22996"