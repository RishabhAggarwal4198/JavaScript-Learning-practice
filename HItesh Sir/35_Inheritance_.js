
// 💎✅💎 BASIC - SYNTAX  👇👇

class Userrzz {
    constructor (username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}



// 💎✅💎 Now suppose we are making any website like E-commerce or Shopping so we also have to make this "Userrzz" as ADMIN, TEACHER, STUDENT

class Teacher extends Userrzz {                    // 💎🍁✅🍁💎 So in in functions previously as we used to use ".prototype" keyword to add any new "PROTOTYPE-property" to the function, Similarly in CLASSES here we have "extends" keyword to add or kind of extend the "PROTOTYPE" properties of that particular class
    constructor (username, email, password) {
        super(username)                           //[💎🍁✅🍁💎Using "super(username)" here will directly contact to the name of the class written after "extedds" & will call it, which in this case is "extends User"  ] [@8:25:43]
        this.email = email
        this.password = password
    }
    
    
    addCourse () {
        console.log(`A new course was added by ${this.username}`);
    }


}

const chayii = new Teacher ("Rohan", "rohan@gmail.com", "123");

// chayii.addCourse()   //[📍📍 Answer is :-  "A new course was added by Rohan"  ]
// chayii.logMe();       //[📍📍 Answer is :-  "USERNAME is Rohan"  ]



const newChayii = new User("Rohan")

// newChayii.logMe();  //[📍📍 Answer is :-  "USERNAME is Rohan"  ]
// newChayii.addCourse();   //[📍📍 Answer is :-  Error  ]


console.log(chayii === newChayii);    //[📍📍 Answer is :-  "false"  ]
console.log(chayii === Teacher);     //[📍📍 Answer is :-  "false"  ]

console.log(chayii instanceof User);   //[📍📍 Answer is :-  "true"  ]



