

// EXAMPLE- FUNCTION -1  👇👇

function sayMyName () {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName();   //  📍 Answer is  "R"  "I"  "S" "H" "A" "B" "H" 






// EXAMPLE- FUNCTION -2  👇👇

function addTwoNumbers (number1, number2) {
     return number1**number2
     console.log("Rishabh Aggarwal"); // After return nothing is going to get printed
}; 

const result = addTwoNumbers(3, 4);
// console.log(result);   // 📍 Answer is  "81"








// EXAMPLE- FUNCTION -3  👇👇

function loginUserMessage (username) {
    return `${username} just logged in`
}

//   console.log( loginUserMessage("Rishabh"));   // 📍 Answer will be "Rishabh just logged in"
  
//   console.log( loginUserMessage(""));  // 📍 Answer will be "just logged in" [bcoz passed string argument is empty]
 


//   console.log( loginUserMessage());  // 📍 Answer will be "undefined just logged in" [bcoz nothing is passed as arguement]
    
  // 📍👇📍 For preventing the above "undefined just logged in" case we use IF - ELSE statement 👇

  function loginUserMessage2 (username2) {
        if (!username2) {     //  here  "!username2" is exactly  same as using "username2 === undefined" 
            console.log("Please enter a username");
            return   // ud=sing return as a "full-stop" here
        } 
    }

    console.log(loginUserMessage2());      // 📍 Answer is  "Please enter a username"






