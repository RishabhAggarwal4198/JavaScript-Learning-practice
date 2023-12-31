// 📍 There are two ways of declaring an OBJECT one is like a "LITERAL" & "CONSTRUCTOR"
// When we declare like LITERALS than "singleton " is not formed
// When we declare like CONSTRUCTOR than "singleton " is formed

// Object.create [it is the method which is called through CONSTRUCTOR method]

// object literals



// SYMBOL DATA - TYPE & only way to access it  👇👇

const mySym = Symbol ("key1")

const JsUser0 = {
    [mySym]: "mykey1"
}

// console.log(JsUser0[mySym]);  // 📍 Answer is  "mykey1"




// OBJECTs  👇👇

const mySym0 = Symbol("key1")   // SYMBOL element watch @3:54:00

const JsUser = { 
    name:"Rishabh",
    "full Name" : "Rishabh Aggarwal",    // 📍 This value can't be accessed through dot(.) method
    [mySym0] : "mykey1",
    age : 18,
    Location: "jaipur",
    email: "aggarwalrishabh4198@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}


// FIRST- WAY of accessing an OBJECT 👇👇
// console.log(JsUser.email);    // 📍  Answer is "aggarwalrishabh4198@gmail.com"


// SECOND- WAY of accessing an OBJECT 👇👇
// console.log(JsUser[email]);         // 📍  Answer is "ReferenceError: email is not defined" [ so we have to put email word in ""  i.e.  "email"]
// console.log(JsUser["email"]);      // 📍  Answer is "aggarwalrishabh4198@gmail.com"
// console.log(JsUser["full Name"]);  // 📍  Answer is "Rishabh Aggarwal"
// console.log(JsUser[mySym0]);       // 📍  Answer is "mykey1"



// To change or OVERWRITE any value  in OBJECTS 👇👇
JsUser.email = "rishabhChatGPT.com"
// console.log(JsUser.email); // 📍 Answer is "rishabhChatGPT.com"

// Now if we want to FREEZE the particular value so for that 👇
// Object.freeze(JsUser)  // 🍁🍁🍁🍁FREEZEING the values 🍁🍁🍁🍁
JsUser.email = "rishabh_twitter.com"
// console.log(JsUser.email); // 📍 Answer is still "rishabhChatGPT.com" {Bcoz we freezed it}





 
JsUser.greeting = function() {
    // console.log("Hello JS user");
}

// console.log(JsUser.greeting);  //  📍 Answer is "[Function (anonymous)]" [bcoz at this stage function not got executed, we only got its refrence back ]
// console.log(JsUser.greeting());  //  📍 Answer is "Hello JS user"


JsUser.greetingTwo = function() {
    // console.log(`Hello JS user, ${this.name}`);   //📍THIS keyword  //📍When we have to refrence the same object we use the keyword "this" & then we could access all it's poperties
}

// console.log(JsUser.greetingTwo());  // 📍 Answer is "Hello JS user, Rishabh"




