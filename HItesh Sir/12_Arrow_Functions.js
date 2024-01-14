
const user = {
    username: "Rishabh",
    price: 99,

    welcomeMessage: function() {

            // console.log(`${this.username}, welcome to website`);  // 📍Answer is "Rishabh, welcome to website"
                                                                     //✅✅ "this" keyword is used to refer the current context
            // console.log(this);   // ✅📍Answer is :- 
                                    // {
                                    //     username: 'Rishabh',
                                    //     price: 99,
                                    //     welcomeMessage: [Function: welcomeMessage]
                                    // }
                                         
    }
}

 


// user.welcomeMessage       // 📍Answer is NOTHING HAPPENED

user.welcomeMessage()    // 📍Answer is "Rishabh, welcome to website"



//✅ IF SOMEONEONE 👇(changed the context like below)
// user.username = "sam Altman"
// user.welcomeMessage()    // 📍Answer is  "sam Altman, welcome to website"



//🍁🍁 👇👇
console.log(this);    // 📍Answer is "{}"  [it came "{}" i.e. current contect came empty bcoz]




// 🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁
// In BROWSER the biggest "global object" is "Window" object (& that's why we are able to capture all events of "WINDOW" like "click", "form-submit" etc.)
// 🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁






// 💎✅💎"this" keyword 👇👇

function play () {
    console.log(this);
}
 
// play()              // ✅✅✅There will be lots of values in the "Answer" [run it to see that]
// console.log(this);  // 📍Answer is  "{}"

      // 🔽🔽

const play2 = function () {
    let username = "Rishabh"
    console.log(this.username);
}

// play2()  // 📍Answer is "undefined"






// 💎✅💎 ARROW-FUNCTION (prerequisites) 👇👇 [@ 5:42:00]

const play3 =  () =>  {
    let username = "Rishabh"
    console.log(this);
}

// play3() // 📍 Answer is "undefined" [when "console.log(this.username)"]

//  play3() // 📍 Answer is "{}" [when "console.log(this)"]



// ARROW-FUNCTION >> basic Syntax 👇
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
✅ If we Gona use "()" parenthesis around  "num1 + num2" then use of "return" keyword before it is not
*/









