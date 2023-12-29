// class User {
//     constructor (email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     get password () {
//         return this._paSSword.toUpperCase()
//     }

//     set password(value) {
//         this._paSSword = value.toUpperCase()
//     }
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
console.log(Ramesh.email);                                 //  [📍📍 Answer is :- "ramesh@gmail.com" ] 





