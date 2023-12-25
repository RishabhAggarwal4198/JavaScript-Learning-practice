


// ➤JavaScript and classes 

// ➤ OOPs 

/* ➤ Objects in JS :- 
   +  Collection of properties and methods
   + 
   */ 

// Why to use OOPs



/* ➤ Parts of OOPs :- 
   +  Object Literals
   +  Constructor Functions
   + Prototypes 
   + Classes
   + Instances (new, this)
   */ 


/* ➤ 4 keywords or $ pillars of OOPs :- 
   +  ABSTRACTION - 📍 Abstraction means to hide the details, it basically hides all the details that are happening under the hood & gives u the abstracted form of it
   +  ENCAPSULATION - 📍 As the name goes it basiclly Encapsulates or Wraps up the data
   +  INHERITANCE
   +  POLYMORPHISM - 📍 As the name goes 'POLY' means many & 'MORPHISM' means forms or roop, so it basically means "SO MANY FORMS"
   */ 









    // 💎💎 OBJECT - LITERALS 👇👇

   const user = {
    username: "Rishabh",
    loginCount: 8,
    signedIn : true,

    getUserDetails : function () {
        console.log("Got user details from database");
    }
   }

   
//    console.log(user.username);
//    console.log(user.getUserDetails);    // [📍 Will print the whole function  ]
//    console.log(user.getUserDetails());  // [📍 Will print the line only in console log  ]


                  //  🔽🔽 (With "this"  Key Word)

    const userr = {
    username: "Rishabh",
    loginCount: 8,
    signedIn : true,

    getUserDetailss : function () {
        // console.log(`Give me the Login Count : ${loginCount}`);   // [📍 Will throw an error bcoz it doesn't know that what & which " loginCount" to consider ]
        console.log(`Give me the Login Count: ${this.loginCount}`); // [📍 bcoz of the insertion of "this" keyword it would print the result as "Give me the Login Count:  8" ]
    }
   }

//    console.log(userr.getUserDetailss()); 

                  //  🔽🔽 (console.logging just "this" word )

    const userrr = {
    username: "Rishabh",
    loginCount: 8,
    signedIn : true,

    getUserDetailsss : function () {
         console.log(this);
    }
   }

//    console.log(userrr.getUserDetailsss());  // [ 📍 Will print "{username: 'Rishabh', loginCount: 8, signedIn: true, getUserDetailsss: ƒ}" as result ]
//    console.log(this);  // [📍 Printing it here it will give "{}" , BUT printing it in browser will give "Window {window: Window, self: Window, document: document, name: '', location: Location, …}" i.e. a GLOBAL OBJECT bcoz there hundred of things are happening ]

   






 // 💎💎 CONSTRUCTOR - FUNCTIONS 👇👇  [allows us to make different INSTANCES from one single OBJECT-LITERALS ]

   function User (username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

     return this
   }

   const userOne = User ("Rishabh", 12, true)

   console.log(userOne);


