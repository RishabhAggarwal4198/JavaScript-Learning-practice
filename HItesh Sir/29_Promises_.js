/*  For reading "PROMISE" documentation :-
    ✅https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    ✅https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
    */ 



// 💎💎 Creating a PROMISE 👇👇

const PromiseOne = new Promise (function(resolve, reject){     // [📍📍 in our daily world a PROMISE done by someone will only have two aspects 1) Either it will be completed 2) Or it will not get completed, So Similarly in JS also PROMISE have two aspects "resolve" & "rejected"]

    // Do an Async task (some of these things takes time ):-
    // + DB calls
    // + Cryptography
    // + Network


    setTimeout(function (e) {
        // console.log('Async task is complete');    // [📍📍 "Async task is complete"  got printed after 1 minute]
        resolve ();                               //[💎📍💎 "resolve()" is very important to be called to connect it to ".then" below]
    },1000)
    
})



// // 💎💎 Consuming a PROMISE 👇👇
    
PromiseOne.then (function(){                 // [📍📍 ".then" is put over here as it is directly related to "resolve" ]
    // console.log("Promise in consumed");      // [📍📍 "Promise in consumed"  got printed after 1 minute]
})


                        // 🔽🔽 (little short way of doing the above thing)


new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Async 2 resolved");
})






// 💎💎 PROMISE - 3 👇👇


// Creating "promise" 👇 
const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({
            username : "Rishabh",
            email : "code@example.com"})
    }, 1000)
})


// Consuming "promise" 👇 
promiseThree.then(function(user){
    console.log(user);              // [📍 "{ username: 'Chai', email: 'code@example.com' }" got printed in console.log ]
})








// 💎💎 PROMISE - 4 👇👇

// Creating "promise" 👇 
const promiseFour = new Promise (function (resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve ({username: "Rishabh",
                     password: "123"})
        }else{
            reject("!ERROR: Something went wrong")
        }
    },1000)
})



// Consuming "promise" 👇 

// promiseFour.then().catch()    // [📍 One-Way of doing this]

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {                 // [📍This is called chaining (i.e. the value which we gonna receive from the ".then" above, only that value will enter this ".then" )]
    console.log(username);
}).catch(function (errorrr){
    console.log(errorrr);
}).finally(() => console.log("The promise is either resolved or rejected"))

// [📍💎📍 Answer is "!ERROR: Something went wrong" & "The promise is either resolved or rejected"  bcoz "let error = true;" in line 79]
// [📍💎📍 Answer is "Rishabh" & "The promise is either resolved or rejected"  when "let error = false;" in line 79]







// 💎💎 PROMISE - 5 👇👇

// const promiseFive = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve ({username: "JavaScript",
//                      password: "123"})
//         }else{
//             reject("!ERROR: JS went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive () {           // [📍📍 Async means "some response is about to come"]         
//     const response = await promiseFive
//     // console.log(response);
// }
// // consumePromiseFive();


        // 🔽🔽  (OR) [for Handling error much more gracefully ]


 // Creating "promise" 👇 
    const promiseFivee = new Promise(function (resolve, reject){
        setTimeout(function(){
            let error = true;
            if(!error){
                resolve ({username: "JavaScript",
                            password: "123"})
            }else{
                reject("!ERROR: JS went wrong")
            }
        },1000)
    })


    // Consuming "promise" 👇 
    // async function consumePromiseFive () {        // [📍📍 Async means "some response is about to come"]
    //     try {
    //         const response = await promiseFivee
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // consumePromiseFive();      // [📍 Answer is "!ERROR: JS went wrong" bcpz " let error = true;"  in the line 143 ]

    // async function getAllUsers () {
    //    try {
    //         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         console.log(data); 
    //    } catch (error) {
    //         console.log("E: ", error );
    //    }
    // }

    // getAllUsers()


                  // 🔽🔽 (writing above function in ".then & .catch" format)


    fetch ('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .catch((error) => console.log(error))

