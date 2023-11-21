
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






