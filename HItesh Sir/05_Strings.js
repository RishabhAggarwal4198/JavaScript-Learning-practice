const name = "Rishabh"

const repoCount = 50


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);







// Another way of DECLARING string

const gameName = new String ('Rishabhhhhh');

console.log(gameName);
console.log(gameName.__proto__);




console.log(gameName.length);
console.log(gameName.toUpperCase());


// Suppose we want to know that which character is on the position 't' in  String ('Rishabhhhhh'); ??
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));




const newString = gameName.substring(0,5)
console.log(newString);   // result wont include the last digit number 

const anotherString = gameName.slice(-10, 4);
console.log(anotherString); 



const newStringOne = "    Rishabh    "
console.log(newStringOne);  // answer will be '    Rishabh    '
console.log(newStringOne.trim()); // answer will be 'Rishabh'    [watch the documentation at mdn]





const url = "https://rishabh.com//risabh%20aggarwal.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))







let value = "I went to a nice hill station. "

console.log(value.split('-'));









