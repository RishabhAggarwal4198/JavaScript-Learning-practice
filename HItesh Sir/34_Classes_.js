
// 💎💎 BASIC - SYNTAX  👇👇

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword () {
//         return `${this.password}abe`
//     }

//     changeUserName () {
//         return `${this.username.toUpperCase()}`
//     }

// }

// const idenity = new User ("Ramanuj", "ramanuj@gmail.com", "4567")

// console.log(idenity.encryptPassword());  // [📍📍 Answer is :-  "4567abe"  ]

// console.log(idenity.changeUserName());    // [📍📍 Answer is :-  "RAMANUJ"  ]




// 💎💎 behind the SCENE - FUNCTIONING 👇👇

function User (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}


const tea = new User ("Shivam", "shivam@gmail.com", "123");

// console.log(tea.encryptPassword());       // [📍📍 Answer is :-  "123abc"  ]
// console.log(tea.changeUserName());        // [📍📍 Answer is :-  "SHIVAM"  ]