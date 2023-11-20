
const tinderUser0 = new Object () // 📍 its an "SINGLETON-OBJECT" 📍
const tinderUser = {}  // 📍 its an "NON-SINGLETON-OBJECT" 📍

tinderUser.id = "123abc"
tinderUser.name = "Rishabh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  // 📍 Answer is "{ id: '123abc', name: 'Rishabh', isLoggedIn: false }"





const regularUser =  {
    email: "some@gmail.com",
    fullname :{
        userfullname:{
            firstname: "Rishabh",
            lastname : "Aggarwal"
        }
    }
}

// console.log(regularUser.fullname);    // 📍 Answer is  "{ userfullname: { firstname: 'Rishabh', lastname: 'Aggarwal' } }"

// console.log(regularUser.fullname.userfullname.lastname);   // 📍 Answer is  "Aggarwal"






const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign( obj1, obj2)  // 📍 Answer is  "{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }"
const obj3 = Object.assign({}, obj1, obj2)  // 📍 Although results are same as that of the  UPPER-ONE but this Syntax to be followed with "{}" for perfect results
console.log(obj3);
