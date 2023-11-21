// Immediately Invoked Function Expressions (IIFE)

function game() {
    console.log(`DB CONNECTED`);
}

// game()    // 📍 Answer is "DB CONNECTED"


                // OR


// (function game2() {                      // 💎 Is called NAMED - IIFE
//     console.log(`DB INTER-CONNECTED`);
// }) ();                                   // 📍 Answer is "DB INTER-CONNECTED" [ 📍using ";" at the end is must ]


                // OR


// ( () => {                                // 💎 Is called UN-NAMED - IIFE
//     console.log(`DB CONNECTED TO`);
// }) ();                                  // 📍 Answer is "DB CONNECTED TO" [ 📍using ";" at the end is must ]
                
                
                // OR


// ((name) => {                                // 💎 Is called UN-NAMED - IIFE
//     console.log(`DB CONNECTED TWO ${name}`);
// }) ("Rishabh");                           // 📍 Answer is "DB CONNECTED TWO Rishabh" [ 📍using ";" at the end is must ]


