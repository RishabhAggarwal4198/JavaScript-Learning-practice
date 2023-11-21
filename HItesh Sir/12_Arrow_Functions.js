
const user = {
    username: "Rishabh",
    price: 99,

    welcomeMessage: function() {
            // console.log(`${this.username}, welcome to website`);  // 📍Answer is "Rishabh, welcome to website"

            // console.log(this);   //  📍Answer is :- 
                                    // {
                                    //     username: 'Rishabh',
                                    //     price: 99,
                                    //     welcomeMessage: [Function: welcomeMessage]
                                    // }
                                         
    }
}

user.welcomeMessage()   

// console.log(this); // 📍Answer is "{}"








function play () {
    console.log(this);
}

// play()





const play2 = function () {
    let username = "Rishabh"
    console.log(this.username);
}

// play2()  // 📍Answer is "undefined"







// ARROW-FUNCTION (prerequisites) 👇👇

const play3 =  () =>  {
    let username = "Rishabh"
    console.log(this);
}

// play3() // 📍 Answer is "undefined" [when "console.log(this.username)"]

//  play3() // 📍 Answer is "{}" [when "console.log(this)"]











// ARROW-FUNCTION 👇👇


// basic Syntax 👇
const addTwo = (num1, num2) => {
    return num1 + num2                              // 💎 Is called EXPLICIT - RETURN
}
// console.log(addTwo(3,4));                       // 📍 Answer is "7" 


                   // OR (another way of writing same function)

// implicit- return Syntax 👇
const addTwo2 = (num1, num2) =>  (num1 + num2)      // 💎 Is called IMPLICIT - RETURN

// console.log(addTwo2(3,4));                      // 📍 Answer is "7" 


                    // OR

const addTwo3 = (num1, num2) =>  num1 + num2         // 💎 Is also called IMPLICIT - RETURN

// console.log(addTwo2(3,4));                        // 📍 Answer is "7" 


/*  🚩🚩NOTE(for above)🚩🚩 
✅ If we Gona use "{}"  CURLY brackets around  "num1 + num2" then use of "return" keyword before it is must
✅ If we Gona use "()" parenthesis around  "num1 + num2" then use of "return" keyword before it is must
*/









