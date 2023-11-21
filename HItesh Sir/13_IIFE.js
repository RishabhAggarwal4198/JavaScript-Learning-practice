// Immediately Invoked Function Expressions (IIFE)

function game() {
    console.log(`DB CONNECTED`);
}

// game()    // 📍 Answer is "DB CONNECTED"




(function game2() {
    console.log(`DB INTER-CONNECTED`);
})()       // 📍 Answer is "DB INTER-CONNECTED"


