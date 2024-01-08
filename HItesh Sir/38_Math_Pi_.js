
// console.log(Math.PI);                   //[📍📍Answer is :- "3.141592653589793"  (bcoz "Math.PI" is a constant ) ] 
// Math.PI = 5;
// console.log(Math.PI);                   //[📍📍Still Answer is :- "3.141592653589793" ] 



//💎✅💎 But why we are not able to change the value of "Math.PI" ? Whta's happening behind the scenes ?

//👇👇

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")         //[📍📍 "getOwnPropertyDescriptor" tells us about some hidden properties of an OBJECT ] 

// console.log(descriptor);  
                            /*📍📍 Answer is :-  
                            " {
                                value: 3.141592653589793,
                                writable: false,                      //[📍So, it can't  become  "true" at any cost, bcoz our JAVASCRIPT-ENGINE has made it so much hard coded in C++ that this value can't be changed ] 
                                enumerable: false,
                                configurable: false
                                } "  
                           */



// 💎💎  understanding with the helpof an EXAMPLE 👇👇


//✅ Alternate way of creating an OBJECT👇

const myNewObject = Object.create(null);


//✅ Conventional  way of creating an OBJECT👇

const  tea = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderTea : function () {
            console.log("tea is ready");
    }
}


// console.log(tea);                                            //[📍📍 Answer is :-  "{ name: 'ginger tea', price: 250, isAvailable: true }"  ] 
// console.log(Object.getOwnPropertyDescriptor(tea, "name"));
                                                            /*📍📍 Answer is :-  
                                                            " {
                                                                value: 'ginger tea',
                                                                writable: true,
                                                                enumerable: true,
                                                                configurable: true
                                                                } "  
                                                        */


                            // 🔽🔽 (altering the properties like "writability" etc. )


// Object.defineProperty(tea, 'name', {
//     writable:false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(tea, "name"));
                                                        /*📍📍 Answer is :-  
                                                        "{
                                                            value: 'ginger tea',
                                                            writable: false,
                                                            enumerable: false,
                                                            configurable: true
                                                            } "
                                                        */



// 💎💎Using "FOR-OF" loop   👇👇
                                                            
// for (const [key, value] of tea) {
//     console.log(`${key} : ${value}`);      //[📍📍 Answer is :-  "TypeError: tea is not iterable"  ] 
// }

                 // 🔽🔽


// for (const [key, value] of Object.entries(tea)) {
// console.log(`${key} : ${value}`);     
// }                                      
                        /*📍📍 Answer is :-  
                            "name : ginger tea
                            price : 250
                            isAvailable : true
                            orderTea : function () {
                            console.log("tea is ready");
                            } "
                        */


                 // 🔽🔽


// for (const [key, value] of Object.entries(tea)) {
// if(typeof value !== 'function')
// console.log(`${key} : ${value}`);     
// }                                      
                        /*📍📍 Answer is :-  
                                "price : 250    
                                isAvailable : true "
                        */


                 // 🔽🔽


Object.defineProperty(tea, 'name', {
    // writable:false,
    enumerable : true
})


for (const [key, value] of Object.entries(tea)) {     // [ 📍📍 Since "enumerable : true" so "name:ginger tea" is gonna get iterated or printed]
if(typeof value !== 'function')
console.log(`${key} : ${value}`);     
}                                      
                        /*📍📍 Answer is :-  
                                "name : ginger tea    
                                price : 250
                                isAvailable : true "
                        */

                                

