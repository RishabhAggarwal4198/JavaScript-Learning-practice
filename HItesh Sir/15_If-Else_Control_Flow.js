
//💎✅💎CONTROL-FLOW 💎✅💎 (or LOGIC FLOW)
/* This means that at all the code should run on the conditional basis,
   i.e. at one time, only one part of code should run
*/








// 💎✅💎 CONDITION Operators 👇👇
// <, >, <=, >=, ==, !=, ===, !==

// console.log(2 != "2");     //📍 Answer is "false"
// console.log(2 == "2");     //📍 Answer is "true"

// console.log(2 !== "2");    //📍 Answer is "true"
// console.log(2 === "2");    //📍 Answer is "false"

// console.log(3 != 2);       //📍 Answer is "true"









//💎✅💎 BASIC-syntax  👇👇 

if(true) {      //✅if "true" only then this code gonna execute

}

   // 🔽🔽

if(false) {     //✅if "false" then the code from line 25 - 27 will not get executed

}









//✅✅ EXAMPLE -1  👇👇

// const isUserLoggedIn = true;
const temperature = 41;


if(temperature < 50) {
    // console.log(`Temperature is "${temperature}" & is less than 50`);    // 📍 Answer is "Temperature is "41" & is less than 50"
}
// console.log(`Temperature is "${temperature}" & is greater than 50`);      // 📍 Answer is "Temperature is "41" & is greater than 50"

               // 🔽🔽

if(temperature === 41) {       // ✅ in place of "temperature < 50"
//     console.log("Temperature is less than 50 Degrees");
} else {
//     console.log("Temperature is greater than 50 Degrees");    // 📍 Answer will be "Temperature is less than 50 Degrees"
}    

             // 🔽🔽

if(temperature === 40) {       
    // console.log("Temperature is less than 50 Degrees");      // 📍Nothing will get executed
}else {
    // console.log("Temperature is greater than 50 Degrees");        // 📍 Answer will be "Temperature is greater than 50 Degrees"
}  











//✅✅ EXAMPLE - 2  👇👇

const score = 200

if (score > 100) {
    let power = "power to fly"
    // console.log(`User power: ${power}`);    //  📍 Answer will be "TUser power: power to fly"
}                                       

// console.log(`User power: ${power}`);     //  ✅ Answer will be "ERROR" [bcoz variable "power" can't be accessed out of its scope]








// 💎✅💎 SHORT-HAND NOTATION 👇👇

const balance = 1000;

//  📍 Instead of using {} we could also directly do this 👇 [But try to do this for one liner "console.log" only ]
// if (balance2 > 500) console.log("tested ");

                           //OR

//  📍 We can add more "console.log" statements as well by using comma (,) but writing like this 👇 is very UNPROFESSIONAL
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

    const month = 3;

    switch (month) {
        case 1:
            // console.log("month is January");
            break;

        case 2:
            // console.log("month is February");
            break;

        case 3:
            // console.log("month is March");
            break;
    
        case 4:
            // console.log("month is April");
            break;
    
        default:
            // console.log("No Match found");
            break;
    }           //  📍 Answer is "month is March"  





    
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




/*  🚩🚩NOTE(for above)🚩🚩 
✅  In above SWITCh statements, if we are not going to provide "break;" keyword after
    every "case" statement, so the system will print each & every "case" statement 
    which comes after the matched "case" statements except the "default" statements

*/
        
