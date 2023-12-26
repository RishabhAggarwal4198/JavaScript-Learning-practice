let  myName = "Rishabh      ";
let  iamLearning = "Javascript     ";

// console.log(myName.trim().length);   //[📍📍 Answer is :- "7" (as expected), but inserting "trim()" is the most primitive way of doing that ]


                 // 🔽🔽

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}



// 💎💎 injecting a PROTOTYPE property directly to the higher authority i.e. OBJECT 👇👇

Object.prototype.Rishabh = function() {
    console.log(`Rishabh is present in all objects`);
}


// heroPower.Rishabh()    //[ 📍📍 Answer is :- "Rishabh is present in all objects" ]
// myHeros.Rishabh();     //[ 📍📍 Answer is :- "Rishabh is present in all objects" ]





// 💎💎 injecting a PROTOTYPE property directly to  ARRAY 👇👇

Array.prototype.HeyRishabh = function () {
    console.log(`Rishabh says hello`);
}

// myHeros.HeyRishabh();    //[📍📍 Answer is :-  "Rishabh says hello"  ]
// heroPower.HeyRishabh();  //[📍📍 Answer is "Error" (bcoz u injected value in ARRAY, which is lower in hierarchy than OBJECT) ]






// 💎💎 INHERITANCE 👇👇

const User = {
    name: "Ramesh",
    email: "ramesh@google.com"
}

const Teacher = {
    makeVideo: true
}


const TeachingSupport = {
    isAvailable: false
}


//📍 OLD - SYNTAX 👇

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport       //[📍📍 This is INHERITANCE ]
}

Teacher.__proto__ = User




//📍 MODERN - SYNTAX 👇

Object.setPrototypeOf(TeachingSupport, Teacher)    // [📍📍 "TeachingSupport" is gonna accces all the values of "Teacher"  ]













// 💎💎 Now SOLVING the vary fisrt PROBLEM 👇👇

let anotherUserName = "Vignesh Ramasundaran            "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);        // 📍📍it's an OBSOLETE property, so not got discussed that's why commented
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength(); /* 
                              [📍📍 Answer is :-  "Vignesh Ramasundaran "           
                                                   "True length is: 20"
                             bcoz overhere "truLength():" was having only 
                            the refrence of "anotherUserName" only & whose
                            value is  equals to "Vignesh Ramasundaran            "  */



"Rishabh".trueLength();  /* Similarly :- 
                            [📍📍 Answer is :- "Rishabh"
                                                "True length is: 7"
                        */



"MasalaDosa".trueLength(); /* Similarly :- 
                             [📍📍 Answer is :- "MasalaDosa"
                                                "True length is: 10"
                             */
