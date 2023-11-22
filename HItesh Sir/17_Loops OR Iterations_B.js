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

