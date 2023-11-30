
const tinderUser0 = new Object () // 📍 its an "SINGLETON-OBJECT" 📍
const tinderUser = {}  // 📍 its an "NON-SINGLETON-OBJECT" 📍


// to add more values in an existing object 👇👇

tinderUser.id = "123abc"
tinderUser.name = "Rishabh"
tinderUser.isLoggedIn = false
// console.log(tinderUser);  // 📍 Answer is "{ id: '123abc', name: 'Rishabh', isLoggedIn: false }"



//Object inside an OBJECT 👇👇

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
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign( obj1, obj2)  // 📍 Answer is  "{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }"
const obj3 = Object.assign({}, obj1, obj2)  // 📍 Although results are same as that of the  UPPER-ONE but this Syntax to be followed with "{}" for perfect results [in this "{}" acts as the target & rest "obj1, obj2" as source ]
// console.log(obj3);   // 📍 Answer is "{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }"


//👇👇 SPREAD-OPERATOR  [ above statement syntax mostly used in the ACTUAL- WORLD ]👇👇
const obj5 = { ...obj1, ...obj2, ...obj4}
// console.log(obj5);  // 📍 Answer is  "{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }"


// When value comes from DATA-BASE 👇👇
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "r@gmail.com"
    },
    {
        id: 3,
        email: "r@gmail.com"
    },
    {
        id: 4,
        email: "r@gmail.com"
    },
    {
        id: 4,
        email: "r@gmail.com"
    },
]


let output = users[2].id
// console.log(output);  // 📍 Answer is  "3"

// console.log(tinderUser);  // 📍 Answer is  "{ id: '123abc', name: 'Rishabh', isLoggedIn: false }"

// For EXTRACTING - KEYS 👇👇
// console.log(Object.keys(tinderUser));  // 📍 Answer is  "[ 'id', 'name', 'isLoggedIn' ]"       [Answer which we gets is in the form of ARRAY]

// For EXTRACTING - VALUES 👇👇
// console.log(Object.values(tinderUser));  // 📍 Answer is  "[ '123abc', 'Rishabh', false ]"     [Answer which we gets is in the form of ARRAY]

// ENTRIES (makes a Key-value pair an ARRAY) 👇👇
// console.log(Object.entries(tinderUser));  // 📍 Answer is  "[ [ 'id', '123abc' ], [ 'name', 'Rishabh' ], [ 'isLoggedIn', false ] ]"



// FOR -ASKING whether the OBJECT have a particular property or not ?👇👇
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //  📍 Answer is  "true"
// console.log(tinderUser.hasOwnProperty('isLoggedOff'));  //  📍 Answer is  "false"






// DE - STRUCTURING 👇👇

const course = {
    coursename: "JS Course",
    price: "999",
    courseInstructor: "Rishabh"
}

// const {courseInstructor } = course  // 📍
const {courseInstructor : instructor} = course // 📍  If "CourseInstructor" is a big name so we could also name it just "instructor"
console.log(instructor);  // 📍 Answer is  "Rishabh"



