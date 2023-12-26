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


const Teacher = {
    makeVideo: true
}


const TeachingSupport = {
    isAvailable: false
}

const TASupport = {

}