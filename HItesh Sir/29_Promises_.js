/*  For reading "PROMISE" documentation :-
    ✅https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    ✅https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
    */ 



// 💎💎 Creating a PROMISE 👇👇

const PromiseOne = new Promise (function(resolve, reject){     // [📍📍 in our daily world a PROMISE done by someone will only have two aspects 1) Either it will be completed 2) Or it will not get completed, So Similarly in JS also PROMISE have two aspects "resolve" & "rejected"]

    // Do an Async task :-
    // + DB calls
    // + Cryptography
    // + Network


    setTimeout(function (e) {
        // console.log('Async task is complete');    // [📍📍 "Async task is complete"  got printed after 1 minute]
        resolve ();                               //[💎📍💎 "resolve()" is very important to be called to connect it to ".then" below]
    },1000)
    
})



// 💎💎 Consuming a PROMISE 👇👇
    
PromiseOne.then (function(){                 // [📍📍 ".then" is directly related to "resolve" ]
    // console.log("Promise in consumed");      // [📍📍 "Promise in consumed"  got printed after 1 minute]
})


                        // 🔽🔽 (little short way of doing the above thing)


new PromiseTwo(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Async 2 resolved");
})





// 💎💎 PROMISE - 3 👇👇

const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function)
})








