function multiplyBy5 (num){
    return num*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5));          // [📍📍 Answer is :-  "25" ]
// console.log(multiplyBy5.power);       // [📍📍 Answer is :-  "2" ]
// console.log(multiplyBy5.prototype);   // [📍📍 Answer is :-  "{}" ]




function createUser(username, score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++;
}

const chai = createUser("chai" , 25)
console.log(chai); 
const tea = createUser("tea", 250)
console.log(tea);