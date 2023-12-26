class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){            // [📍📍 static keyword is added before a function to so that no one could access it from outside ]
        return `123`
    }
}

const Rishabhh = new User("Rishabhh")
// console.log(Rishabhh.createId())    //[📍📍 Answer is :-  "an Error" ( bcoz of "static" keyword)  ]



class Teacher extends User {
    constructor (username, email) {
        super(username)
        this.email = email
    }
}


const iphone = new Teacher ("iphone", "iphone@gmail.com")
console.log(iphone);               //[📍📍 Answer is :-  "Teacher { username: 'iphone', email: 'iphone@gmail.com' }"  ] 

