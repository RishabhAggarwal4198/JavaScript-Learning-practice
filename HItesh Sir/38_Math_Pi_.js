
// console.log(Math.PI);                   //[📍📍Answer is :- "3.141592653589793"  (bcoz "Math.PI" is a constant ) ] 
// Math.PI = 5;
// console.log(Math.PI);                   //[📍📍Still Answer is :- "3.141592653589793" ] 



// ✅ But why i'm not able to change the value of "Math.PI" ? Whta's happening behind the scenes ?

// 💎💎      👇👇

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")         //[📍📍 "getOwnPropertyDescriptor" tells us about some hidden properties of an OBJECT ] 

console.log(descriptor);  /*📍📍 Answer is :-  
                            " {
                                value: 3.141592653589793,
                                writable: false,                      //[📍So, it can't  become  "true" at any cost, bcoz our JAVASCRIPT-ENGINE has made it so much hard coded in C++ that this value can't be changed ] 
                                enumerable: false,
                                configurable: false
                                } "  
                           */

