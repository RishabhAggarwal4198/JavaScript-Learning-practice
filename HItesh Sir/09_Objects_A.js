// ✅✅ There are two ways of declaring an OBJECT one is like a "LITERAL" & "CONSTRUCTOR"
// 🍁When we declare like LITERALS than "singleton " is not formed
// 🍁When we declare like CONSTRUCTOR than "singleton " is formed


// Object.create [it is the method which is called through CONSTRUCTOR method]

// object literals


// SYMBOL DATA - TYPE & only way to access it  👇👇

const mySym = Symbol ("key1")

const JsUser0 = {
    [mySym]: "mykey1"
}

// console.log(JsUser0[mySym]);  // 📍 Answer is  "mykey1"






//💎✅💎 OBJECTs  👇👇

const mySym0 = Symbol("key1")   //🍁🍁[Important INTERVIEW question on SYMBOL element watch @3:54:00]

const JsUser = { 
    name:"Rishabh",
    "full Name" : "Rishabh Aggarwal",    // 📍 This value can't be accessed through dot(.) method [bcoz of the gap which is present b/w full & Name ]
    [mySym0] : "mykey1",        //🍁🍁[Important INTERVIEW question on SYMBOL element watch @3:54:00]
    age : 18,
    Location: "jaipur",
    email: "aggarwalrishabh4198@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"],
}



// 🍀🍀🍀🍀🍀🍀🍀🍀

const twPost = {
     username: "@rishabhaggarwal",
     content: `This is my #firstPost`,
     Likes : 150,
     reposts: 5,
     tags: ['@knowldge', '@delta' ]
}

// console.log(twPost.content);      //📍📍 Answer is :-  "This is my #firstPost"  


//Changing value
twPost.Likes = 220
// console.log(twPost.Likes);         //📍📍 Answer is :-  220


// Adding New Value
twPost.Followers = 1000
// console.log(twPost);         //📍📍 Answer is :- 
				//      {
				// 	username: '@rishabhaggarwal',
				// 	content: 'This is my #firstPost',
				// 	Likes: 220,
				// 	reposts: 5,
				// 	tags: [ '@knowldge', '@delta' ],
				// 	Followers: 1000
				//       }
	
				
//✅ NESTED - OBJECTs  👇👇

const PersonlaInfo = {
	Raman :{
	    Age: '29',
	    Rank: 540,
	    Graduate: true
	},

	Aastha: {
	    Age: '40',
	    Rank: 640,
	    Graduate: true
	},

	Ramesh: {
	    Age: '39',
	    Rank: 740,
	    Graduate: false
	},

}

// console.log(PersonlaInfo.Aastha.Rank);       //📍📍 Answer is :-  640 




//✅ ARRAY in OBJECTs  👇👇

const info = [
	    {
		Age: '29',
		Rank: 540,
		Graduate: true
	    },
    
	    {
		Age: '40',
		Rank: 640,
		Graduate: true
	    },
    
	    {
		Age: '39',
		Rank: 740,
		Graduate: false
	    }
    
]


// console.log(info[2].Rank);        //📍📍 Answer is :-  740  







//💎✅💎 MATH - OBJECT 👇👇

// console.log(Math.PI);                //📍📍 Answer is :- 3.141592653589793  



//Methods of MATH-OBJECTs 👇

let num0 = Math.abs(-12)       //✅ Returns the absolute value (i.e. the Positive value)
// console.log(num0);         //📍📍 Answer is :- 12



let num1 = Math.pow(3, 2)     //✅ Returns the exponent of 3 by the power 2
// console.log(num1);            //📍📍 Answer is :- 9



let num2 = Math.floor(5.7)     //✅ Rounds Off to the "Nearest Smallest Whole "value
// console.log(num2);            //📍📍 Answer is :- 5
let num3 = Math.floor(-6.8)
// console.log(num3);            //📍📍 Answer is :-7



let num4 = Math.ceil(9.7)     //✅ Rounds Off to the " Nearest Largest Whole" value
// console.log(num4);            //📍📍 Answer is :- 10


let num5 = Math.random()     //✅ Give the numerical value from "0 - 1" (in which  1 is exclusive)
// console.log(num5);


//For generating RANDOM numbers in a RANGE (of suppose 1 - 33) 👇

let random = Math.floor(Math.random()*3) + 1;
// console.log(random);     //📍📍 Run it for the Answer

		        // 🔽🔽

//For generating RANDOM numbers in a RANGE (of suppose 21 - 25) 👇

let random0 = Math.floor(Math.random()*5) + 21
// console.log(random0);


// 🍀🍀🍀🍀🍀🍀🍀🍀









// 💎✅💎 FIRST - WAY of accessing an OBJECT 👇👇
// console.log(JsUser.email);    // 📍  Answer is "aggarwalrishabh4198@gmail.com"



//💎✅💎 SECOND - WAY of accessing an OBJECT 👇👇
// console.log(JsUser[email]);         // ❌📍❌  Answer is "ReferenceError: email is not defined" [ bcoz behind the scenes email is getting processed as a STRING so we have to put email word in ""  i.e.  "email"]
// console.log(JsUser["email"]);      // 📍  Answer is "aggarwalrishabh4198@gmail.com"
// console.log(JsUser.full Name);     //  ❌📍❌  Can't be accessed bcoz of the gap b/w full & Name [so will show an error]
// console.log(JsUser["full Name"]);  // 📍  Answer is "Rishabh Aggarwal"

// console.log(JsUser[mySym0]);       // 📍  Answer is "mykey1"






//💎✅💎 To change or OVERWRITE any value  in OBJECTS 👇👇
JsUser.email = "rishabhChatGPT.com"
// console.log(JsUser.email); // 📍 Answer is "rishabhChatGPT.com"



//💎✅💎Now if we want to FREEZE the particular value inside a OBJECT [i.e. we don't want anyone to change it] 👇
// Object.freeze(JsUser)  // 🍁🍁🍁🍁FREEZEING the values 🍁🍁🍁🍁
JsUser.email = "rishabh_twitter.com"
// console.log(JsUser.email); // 📍 Answer is still "rishabhChatGPT.com" {Bcoz we freezed it}






 
JsUser.greeting = function() {
    console.log("Hello JS user");
}

// console.log(JsUser.greeting);  //  ✅ Answer is "[Function (anonymous)]" [bcoz at this stage function not got executed, we only got its return back ]
// console.log(JsUser.greeting());  //  📍 Answer is "Hello JS user"

                                        // 🔽🔽 (using "this" keyword )

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);   //🍁✅🍁THIS keyword [ ✅When we have to refrence the same object we use the keyword "this" & then we could access all it's poperties ]
}

// console.log(JsUser.greeting());     // 📍 Answer is "Hello JS user"
// console.log(JsUser.greetingTwo());  // 📍 Answer is "Hello JS user, Rishabh"




