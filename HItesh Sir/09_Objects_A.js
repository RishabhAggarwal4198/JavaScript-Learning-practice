// There are two ways of declaring an OBJECT one is like a "LITERAL" & "CONSTRUCTOR"

// singleton 
// Object.create

// object literals



// SYMBOL DATA - TYPE & only way to access it  👇👇

const mySym = Symbol ("key1")

const JsUser0 = {
    [mySym]: "mykey1"
}

// console.log(JsUser0[mySym]);  // 📍 




// OBJECTs  👇👇

const JsUser = {
    name:"Rishabh",
    "full Name" : "Rishabh Aggarwal",    // This value can't be accessed through dot(.) method
    age : 18,
    Location: "jaipur",
    email: "aggarwalrishabh4198@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}


// FIRST- WAY of accessing an OBJECT 👇👇
// console.log(JsUser.email);  // 📍  Answer is "aggarwalrishabh4198@gmail.com"



// SECOND- WAY of accessing an OBJECT 👇👇
// console.log(JsUser["email"]);  // 📍  Answer is "aggarwalrishabh4198@gmail.com"
// console.log(JsUser["full Name"]);  // 📍  Answer is "Rishabh Aggarwal"



// To change or OVERWRITE any value  in OBJECTS
JsUser.email = "rishabhChatGPT.com"
// console.log(JsUser.email); // 📍 Answer is "rishabhChatGPT.com"
// Now if we want to FREEZE the particular value so for that 👇
// Object.freeze(JsUser)  // 🍁🍁🍁🍁FREEZEING the values 🍁🍁🍁🍁
JsUser.email = "rishabh_twitter.com"
// console.log(JsUser.email); // 📍 Answer is "rishabhChatGPT.com" {Bcoz we freezed it}





 
JsUser.greeting = function() {
    console.log("Hello JS user");
}

console.log(JsUser.greeting());  //  📍 Answer is "Hello JS user"


JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());  // 📍 Answer is "Hello JS user, Rishabh"




