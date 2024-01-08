
// class Userrzzz {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password
//     }
// }


// const Ramesh = new Userrzzz  ("ramesh@gmail.com", "asdf_vbnm")
// console.log(Ramesh.password);                               //  [📍📍 Answer is :- "asdf_vbnm" ] 


                                    // 🔽🔽

           
                                    
// 💎✅💎GETTERS & SETTERS (from pereventing someone accessing "password") 👇👇
                                    
// class User {
//     constructor (email, password) {            // 💎✅💎  bcoz "set" method below "constructor" is just passing the value to  "set"  but not SETTING any value
//         this.email = email;
//         this.password = password;
//     }

//     get password () {
//         return this._paSSword.toUpperCase()
//     }

//     set password(value) {
//         this._paSSword = value.toUpperCase()   // 💎✅💎 Now "set" is setting the value instead of "constructor" that's why we declared a new variable called "._password"
//     }                                          // 💎✅💎 the name of the varaible inside set need not to be the "._password" only..... it could have been anything
// }

// const Ramesh = new User ("ramesh@gmail.com", "asdf_vbnm")
// console.log(Ramesh.password);                              //  [📍📍 Answer is :- "ASDF_VBNM" ] 



                                // 🔽🔽



class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    get email () {
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    

    get password () {
        return `${this._paSSword}Rishabh`
    }

    set password(value) {
        this._paSSword = value
    }
}


const Ramesh = new User ("ramesh@gmail.com", "asdf_vbnm")
console.log(Ramesh.password);                                 //  [📍📍 Answer is :- "asdf_vbnmRishabh" ] 
console.log(Ramesh.email);                                 //  [📍📍 Answer is :- "RAMESH@GMAIL.COM" ] 





