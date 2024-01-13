


//💎✅💎FUNCTION 👇👇 EXAMPLE-1  

function sayMyName () {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName      //✅✅[must watch @4:38:48] This is function's REFRENCE (i.e. function is present at that place)
// sayMyName();   //✅✅ This is function's EXECUTION

// sayMyName();     //[📍📍 Answer is :-  "R I S H A B H"  ] 






//💎✅💎FUNCTION 👇👇 EXAMPLE-2a

function addTwoNumbers (number1, number2) {
     
    // let result = number1 + number2
    // return result
                // 🔽🔽 (OR)
    return number1 + number2;

}; 

const result = addTwoNumbers(3, 4);
// console.log(`The result is : ${result}`);   // 📍 Answer is  "The result is : 7"



// EXAMPLE- FUNCTION -2b  👇👇

function addTwoNumbers0 (number1, number2) {
     return number1**number2
     console.log("Rishabh Aggarwal"); // 📍 After return nothing is going to get printed
}; 

const result0 = addTwoNumbers0 (3, 4);
// console.log(result0);   // 📍 Answer is  "81"





// EXAMPLE- FUNCTION -3  👇👇

function loginUserMessage (username) {
    return `${username} just logged in`
}

//   loginUserMessage("Rishabh");               // 📍 Nothing will get printed bcoz we havn't said instructed the function to PRINT something
//   console.log( loginUserMessage("Rishabh"));   // 📍 Answer will be "Rishabh just logged in"
//   console.log( loginUserMessage(""));       // 📍 Answer will be "just logged in" [bcoz passed string argument is empty]
//   console.log( loginUserMessage());         // 📍 Answer will be "undefined just logged in" [bcoz nothing is passed as arguement]
    



// 📍👇📍 For preventing the above "undefined just logged in" case we use IF - ELSE statement 👇

  function loginUserMessage2 (username2) {   
        if (!username2) {     //  here  "!username2" [not -username2] is exactly  same as using "username2 === undefined" 
            console.log("Please enter a username");
            return   // ud=sing return as a "full-stop" here
        } 
    }

    // console.log(loginUserMessage2());      // 📍 Answer is  "Please enter a username"

    // 📍 Or to avoid "!username2" condition we could do one thing in place of "username2" we could use "username2 = 'ANYTHING'"






    // [REST-OPERATORS]  EXAMPLE- FUNCTION -4  👇👇

    function calculateCarPrice (...num1) {  // Three dots (...) for FLEXIBILITY that more than one arguments can be passed into the fucntion
        return num1
    }

    // console.log(calculateCarPrice(200, 400, 500, 2000));   // 📍Answer is "[ 200, 400, 500, 2000 ]"   { we received an ARRAY }


    //📍👇📍INTERVIEW Questions Case 📍👇📍

    function calculateCarPrice2 (val1, val2, ...num1) {  // Three dots (...) for FLEXIBILITY that more than one arguments can be passed into the fucntion
        return num1
    }

    // console.log(calculateCarPrice2(200, 400, 500, 2000));  // 📍Answer is "[ 500, 2000 ]"




    // How to pass an OBJECT inside a FUNCTION 👇👇

    const user = {
        username: "Rishabh",
        price: 199
    }

    function handleObject(anyObject) {
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    }

    // handleObject(user);  // 📍Answer is "Username is Rishabh and price is 199"
 




    // If we turned PRICE to PRICES 👇👇

    const user2 = {
        username: "Rishabh",
        prices: 199
    }

    function handleObject0(anyObject) {
        console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    }

    // handleObject0(user2)  // 📍Answer is "Username is Rishabh and price is undefined [ bcoz "price" got changed to "prices"]


    //📍We could also directly pass the OBJECT only 👇👇 [We inserted whole "user" block into it]

    // handleObject({ 
    //         username: "Rishabh",
    //         price: 399
    // })                           // 📍Answer is "Username is Rishabh and price is 399"




    //📍We could also directly pass ARRAY into it 👇👇 

    const myNewArray = [ 200, 400, 100, 600]

    function returnSecondValue (getArray) {
        return getArray [1];
    }

//    console.log( returnSecondValue(myNewArray));   //📍Answer is "400"
//                         // OR
//    console.log( returnSecondValue([ 200, 400, 100, 600]));  //📍Answer is "400"        
   





    