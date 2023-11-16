
console.log('Hello World !');


let a = 12;
let b = 20;

a = b;

console.log(a);


let selectedColors = ['red', 'blue', 'green', 'white', 'blue'];
selectedColors[2] = 1;

console.log(selectedColors.length);


function greet (name , lastName) {
    console.log('Hello ' + name + 'Your complete lastname is ' + lastName + ' right ?');
    
}

greet('Rakshita', 'Aggarwal');











// ES6 Tutorial: Learn Modern JavaScript in 1 Hour

const person = {
    name: 'Mosh',
    walk() {},
    talk() {}
};

person.talk();
person.name = '';

const targetMember = 'name';
person['name'] = 'John';


const person = {
    name: "Mosh",
    walk () {
        console.log(this);
    }
};

person.walk();

const walk = person.walk(person);
walk();







// Arrow Function

const square = function(number) {
    return number * number;
}

const square = () => {
    return number * number;
}

