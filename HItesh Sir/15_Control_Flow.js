// CONDITION Operators:-
// <, >, <=, >=, ==, !=, ===, !==


// BASIC-syntax  👇👇 

if(true) {      // if "true" only then gonna executed, if "false" nothing is going to get executed

}


// const isUserLoggedIn = true;
const temperature = 41;


if(temperature === 41) {       // 📍 in place of "temperature < 50"
//     console.log("Temperature is less than 50 Degrees");
} else {
//     console.log("Temperature is greater than 50 Degrees");
}     // 📍 Answer will be "Temperature is less than 50 Degrees"



if(temperature === 40) {       
//     console.log("Temperature is less than 50 Degrees");
}else {
//     console.log("Temperature is greater than 50 Degrees");
}     // 📍 Answer will be "Temperature is greater than 50 Degrees"




const score = 200

if (score > 100) {
    let power = "power to fly"
    console.log(`User power: ${power}`);
}                                        //  📍 Answer will be "TUser power: power to fly"

// console.log(`User power: ${power}`);     //  📍 Answer will be "ERROR" [bcoz variable "power" can't be accessed out of its scope]





// SHORT-HAND NOTATION 👇👇

const balance = 1000;

//  📍 Instead of using {} we could also directly do this 👇
// if (balance2 > 500) console.log("tested ");

                           //OR

//  📍 But try to do this for one liner only writing like this 👇 is very UNPROFESSIONAL
// if (balance2 > 500) console.log("tested "), console.log("tested 2");  // ❌❌❌❌ Dont do this PROFESSIONALLY







// IF- ELSE  STATEMENTS 👇👇


// const balance2 = 900


// if (balance2 < 400 ) {
//     console.log("Balance less than 400");
// } 
// else if (balance2 < 500) {
//     console.log("Balance less than 500");
// }
// else if (balance2 < 600) {
//     console.log("Balance less than 600");
// }
// else if (balance2 < 700) {
//     console.log("Balance less than 700");
// }
// else if (balance2 < 800) {
//     console.log("Balance less than 800");
// }
// else  {
//     console.log("Balance is less than 900 ");
// }      //  📍 Answer is  "Balance is less than 900" 








const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


// USE OF "&&" SIGN 👇👇 [all conditions must be true]

// if (isUserLoggedIn && debitCard) {
//         console.log("Allow to buy course");
// }         //  📍 Answer is  "Allow to buy course" [bcoz all condition are true]

                    // OR

// if (isUserLoggedIn && debitCard && 2==3) {
//         console.log("Allow to buy course");
// }          //  📍 Nothing got printed [2 != 3]



// USE OF "||" SIGN👇👇 [only one condition needs to be true]

// if (loggedInFromGoogle ||  loggedInFromEmail) {
//     console.log("User logged in");
// }             //  📍 Answer is "User logged in" [bcoz one condition  "loggedInFromEmail" is true]

                     // OR

// if (loggedInFromGoogle ||  loggedInFromEmail || 2==3 ) {
// console.log("User logged in");
// }             //  📍 Answer is still "User logged in"  [bcoz one of the three mentioned condition  "loggedInFromEmail" is true ]









// "SWITCH"  STATEMENTS (Shorter way of writing multiple IF - ELSE)👇👇

  // Basic - Syntax 👇
    
//   switch (key) {
//         case value:
            
//             break;

//         default:
//             break;
//     }




    // EXAMPLE - 1 👇

    // const month = 3;

    // switch (month) {
    //     case 1:
    //         console.log("month is January");
    //         break;

    //     case 2:
    //         console.log("month is February");
    //         break;

    //     case 3:
    //         console.log("month is March");
    //         break;
    
    //     case 4:
    //         console.log("month is April");
    //         break;
    
    //     default:
    //         console.log("No Match found");
    //         break;
    // }           //  📍 Answer is "month is March"  





    
    // EXAMPLE - 2 (In Case of value like "STRING") 👇

    // const month = "July";

    // switch (month) {
    //     case "Jan":
    //         console.log("month is January");
    //         break;

    //     case "Feb":
    //         console.log("month is February");
    //         break;

    //     case "March":
    //         console.log("month is March");
    //         break;
    
    //     case "April":
    //         console.log("month is April");
    //         break;
    
    //     default:
    //         console.log("No Match found");
    //         break;
    // }            //  📍 Answer is "No Match found"  





        
