
// PROBLEM with "var" type variable 👇👇

var c = 300

if (true) {
    let a = 10
    const b = 20
    var c =20
}

// console.log(a);    // 📍Answer will not be printed bcoz "a" is not accesible outside scope
// console.log(b);    // 📍Answer will not be printed bcoz "b" is not accesible outside scope
// console.log(c);       // 📍 🚩🚩{Problem with VAR}🚩🚩 Answer will not be "30" [which should not be as variable "var c" is definded in a SCOPE]
 

/*  🚩🚩NOTE🚩🚩 Anything written inside a Scope is 
called BLOCK - SCOPE & anything written outside of a scope 
is called GLOBAL- SCOPE
+ Whatever we write in GLOBAL-SCOPE that value is accessible inside the BLOCK-SCOPE
+ Whatever we write in BLOCK-SCOPE that value MUST NOT be accessible the GLOBAL-SCOPE/ OUTSIDE
 */



// SCOPE EXAMPLE WITH "FUNCTION" 👇👇

function one() {
    const username = "Rishabh"

    function two () {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);   // 📍Answer will not be error bcoz it won't get executed variable website is inside the scope

    // two()
}

// one()  // 📍No answer will print bcoz function "one()" is only having "two()" to execute









// SCOPE EXAMPLE WITH "IF - ELSE" 👇👇


if (true) {
    const username = "Rishabh"
    if(username === "Rishabh") {
        const website = " youtube"
        console.log(username+website);  // 📍Answer will be "Rishabh youtube"
    }
    // console.log(website);   // 📍Answer will be ERROR bcoz "variable website" is limited to above SCOPE
}

// console.log(username);   // 📍Answer will be ERROR bcoz "variable username" is limited to above SCOPE






