//💎✅💎IIFE :- Immediately Invoked Function Expressions 

// ✅Definition✅ 
// A function which get executed immediately 

// ✅Detailed Definition✅ (for INTERVIEW purpose)
/* Some times problems happens inside the "BLOCK-SCOPE" bcoz of the pollution
   from the variables, declarations etc. of "GLOBAL-SCOPE".
   So to remove all that pollution from "GLOBAL-SCOPE" we use IIFE
 */  



   

function game() {
    console.log(`DB CONNECTED`);
}

// game()    // 📍 Answer is "DB CONNECTED" [🍁🍁V. V. Important (@5:51:26) Interview question ]

                //🔽🔽 OR

// (function game2() {                      // 💎 Is called NAMED - IIFE
//     console.log(`DB INTER-CONNECTED`);
// }) ();                                   // 📍 Answer is "DB INTER-CONNECTED" [ 📍using ";" at the end is must ]


                // 🔽🔽 OR


// ( () => {                                // 💎 Is called UN-NAMED - IIFE
//     console.log(`DB CONNECTED TO`);
// }) ();                                  // 📍 Answer is "DB CONNECTED TO" [ 📍using ";" at the end is must ]
                
                
                // 🔽🔽 OR


// ((name) => {                               // 💎 Is called UN-NAMED - IIFE
//     console.log(`DB CONNECTED TWO ${name}`);
// }) ("Rishabh");                           // 📍 Answer is "DB CONNECTED TWO Rishabh" [ 📍using ";" at the end is must ]






/*  🚩🚩NOTE(for above)🚩🚩 
✅  in this ()() [first parathesis "()" is where we gonna write the definition 
    of the function & the second parathesis "()" is its "execution call"]

✅  IIFEs are not only defined as fuction which immediatley gets executed but also
     defined that sometime due to the pollution from Golbal scope so for removing the 
     variables or declarations from global scope we use IIFE
*/
