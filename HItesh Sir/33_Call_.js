function SetUsername (username) {

    this.username = username
}

function createUser (username, email, passoword){
    SetUsername.call(this, username)

    this.email = email;
    this.passoword= passoword
}

const chai = new createUser ("Ravi", "ravi@gmail.com", "123")

console.log(chai);