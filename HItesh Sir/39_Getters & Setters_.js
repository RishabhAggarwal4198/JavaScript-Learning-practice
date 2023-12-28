class User {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }

    get password () {
        return this.password.toUpperCase()
    }

    set password(value) {
        this.password = value.toUpperCase()
    }
    
}


const Ramesh = new new User ("ramesh@gmail.com", "456")
console.log(Ramesh.password);

