class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    get password () {
        return this._paSSword.toUpperCase()
    }

    set password(value) {
        this._paSSword = value.toUpperCase()
    }
}



const Ramesh = new User ("ramesh@gmail.com", "asdf_vbnm")
console.log(Ramesh.password);                              //  [📍📍 Answer is :- "ASDF_VBNM" ] 

