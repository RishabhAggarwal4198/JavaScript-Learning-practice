const name = "Rishabh"

const repoCount = 50


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



// Another way of DECLARING string

const gameName = new String ('Rishabhhhhh');

console.log(gameName);

// For accessing the prototype stored in above VARIABLE
console.log(gameName[0]);              // 📍 Answer is "R"
console.log(gameName[4]);              // 📍 Answer is "a"


console.log(gameName.__proto__);       // 📍 Answer is "{}"
console.log(gameName.length);          // 📍 Answer is "11"
console.log(gameName.toUpperCase());
console.log(gameName.trimEnd(2));


// Suppose we want to know that which character is on the position 't' in  String ('Rishabhhhhh'); ??
console.log(gameName.charAt(2));       // 📍 Answer is "s"
console.log(gameName.indexOf('h'));    // 📍 Answer is "3"





const newString = gameName.substring(0,5)     // 📍 Answer is "Risha"  [the last value 5 is not icluded]
console.log(newString);   // result wont include the last digit number 

const anotherString = gameName.slice(-10, 4);    // 📍📍📍📍 [MUST SEE] Run the program to see
console.log(anotherString); 



const newStringOne = "    Rishabh    "
console.log(newStringOne);                   // 📍📍 answer will be '    Rishabh    '
console.log(newStringOne.trim());            // 📍📍 answer will be 'Rishabh'  [ it will remove the space at the startng & end ]   [watch the documentation at mdn]





const url = "https://rishabh.com//risabh%20aggarwal.com"

console.log(url.replace('%20', '-'))       // 📍 Answer will be  "https://rishabh.com//risabh-aggarwal.com" [ will remove "20%" at insert "-" in place of it]

console.log(url.includes('sundar'))      // 📍 Answer will be  "false" [Will tell if there would be any such word in the oroginal string]






let value = "I went to a nice hill station. "

console.log(value.split('-'));









