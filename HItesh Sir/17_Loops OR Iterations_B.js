//  FOR of LOOP 

// Like its very common to put STRINGS in ARRAYS like [" ", " ", " "]
//  Similarly it is also common to put OBJECTS in ARRAYS [{ }, { }, { }]




// 📍 FOR-OF Loop

const arr = [1, 2, 3, 4, 5 ]
for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello world!"
for (const greet of greetings ) {
    // console.log(`Each char is ${greet}`);
}







// 📍 Maps

// Example-1
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "france")
// console.log(map);


// Applying "For-of" Loop
for(const [key, value] of map) {
    // console.log(key, ':-', value);   // 📍 RUN statement for result
}



// Example-2
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for(const [key, value] of myObject) {
//     console.log(key, ':-', value);     
// }                                        // 📍This SYNTAX-STRUCTURE not working over here





// 📍printing OBJECT using FOR-IN loop

const myObject1 = {
        js: 'javascript',
        cpp: 'C++',
        rb: 'ruby',
        swift: 'swift by apple'
}

for (const val in myObject1) {
    // console.log(`${val} shortcut is for ${myObject1[val]}`);   // 📍 RUN statement for result
}








// 📍printing ARRAY using FOR-IN loop

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key0 in programming) {
    // console.log(key0);
    // console.log(programming[key0]);
    // console.log(`${key0} shortcut is for ${programming[key0]}`);     // 📍 RUN statement for result
}








// 📍printing MAP using FOR-IN loop

// const map1 = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "france")

// for (const key1 in map1) {
//    console.log(key1);
// }                                      // ❌❌❌❌Nothing Got printed, so FOR-IN loop can't be applied to MAP












// FOR-EACH LOOP 👇👇

const coding = ["js", "ruby", "java", "python", "cpp"]


coding.forEach(function (val){
    // console.log(val);                          // 📍 RUN statement for result
})

             // OR (by using arrow function)

coding.forEach((item) => {
    // console.log(item);                       // 📍 RUN statement for result
})

            // OR (passing a whole function in FOR-EACH loop)


function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe)                     // 📍 RUN statement for result








coding.forEach((itemmm, indexxxx, arr) => {
    // console.log(itemmm, indexxxx, arr);           // ✅📍✅ RUN statement for result
})





//✅✅ accessing OBJECTS inside an ARRAY (very common & important)

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]
  

myCoding.forEach( (item) => {
    // console.log(item.languageName);      // 📍 Answer is "javascript  Java  Python"
})




// const coding2 = ["apple", "oranges", "bananas", "pineapples"]

// const values = coding2.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);          //📍 Answer is "undefined"











// FILTER Operation👇👇

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (ankk) =>  ankk > 4 )
// console.log(newNums);          //📍 Answer is "[ 5, 6, 7, 8, 9, 10 ]"

                        //OR

const newNums0 = myNums.filter( (ankk) =>  {
    return ankk > 4               // We have to use "return" as we have used "{ }"
})
// console.log(newNums);          //📍 Answer is "[ 5, 6, 7, 8, 9, 10 ]"


                        //OR  


// 📍 by using FOR-EACH (in above condition in place of FILTER operation)

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = [] 

myNums2.forEach ((num) => {
    if (num > 4 ) {
        newNums1.push(num)    
    }
})
// console.log(newNums1);            //📍 Answer is "[ 5, 6, 7, 8, 9, 10 ]"






// FILTER Operation examples 👇 (for better understanding)

const books = [
    {title: 'Book One', genre: 'Fiction', publish : 1981, 
     edition : 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish : 1992, 
     edition : 2004},
    {title: 'Book Three', genre: 'History', publish : 1999, 
     edition : 2004},
    {title: 'Book Four', genre: 'Non-Fiction', publish : 1989, 
     edition : 2004},
    {title: 'Book Five', genre: 'Science', publish : 2009, 
     edition : 2004},
    {title: 'Book Six', genre: 'Fiction', publish : 1987, 
     edition : 2004},
    {title: 'Book Seven', genre: 'History', publish : 2007, 
     edition : 2004},
    {title: 'Book Eight', genre: 'Science', publish : 2011, 
     edition : 2004},
    {title: 'Book Nine', genre: 'Non-Fiction', publish : 1981, 
     edition : 2004},
];

const userBooks1 = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks1);                                // 📍 RUN statement for resul


const userBooks2 = books.filter ( (bk) => {
    return bk.publish >= 2000 &&  bk.genre === "History"
})
console.log(userBooks2);                                    // 📍 Answer is :- 
                                                            // "[
                                                            //     {
                                                            //       title: 'Book Seven',
                                                            //       genre: 'History',
                                                            //       publish: 2007,
                                                            //       edition: 2004
                                                            //     }
                                                            //   ]"


